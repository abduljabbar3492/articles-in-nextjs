import UserModel from '../models/user.js';
import ArticleModel from '../models/article.js';
import Ajv from "ajv"; //json schema validator
import { CONSTANTS } from '../helpers/constants.js';
import mongoose from 'mongoose';

const articleSchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        content: { type: 'string', minLength: 10 }
    },
    required: ['title', 'content']
};
const articleController = {
    createArticle: async (req, res, next) => {
        try {
            const ajv = new Ajv();
            let valid = ajv.validate(articleSchema, req.body);
            if (valid) {
                let { title, content } = req.body;
                let newArticle = new ArticleModel({
                    title, content, user_id: mongoose.Types.ObjectId(req.user_id)
                });
                await newArticle.save();
                res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: true,
                    message: `Article successfully saved`,
                    data: newArticle
                });
            } else {
                res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: false,
                    message: ajv.errorsText(),
                    data: null
                });
            }
        } catch (error) {
            next(error);
        }
    },
    getArticlesCount: async (req, res, next) => {
        try {
            let stages = [
                {
                    "$lookup": {
                        "from": "users",
                        "let": {
                            user_id: "$user_id"
                        },
                        "pipeline": [
                            {
                                $match: {
                                    $expr: {
                                        $eq: [
                                            "$_id",
                                            "$$user_id"
                                        ]
                                    }
                                }
                            },
                            {
                                "$project": {
                                    "first_name": 1.0, "last_name": 1.0, "full_name": 1.0
                                }
                            }
                        ],
                        "as": "user"
                    }
                },
                {
                    "$unwind": {
                        "path": "$user",
                        "preserveNullAndEmptyArrays": false
                    }
                },
                {
                    $group: {
                        _id: "$user_id",
                        first_name: { $first: "$user.first_name" },
                        last_name: { $first: "$user.last_name" },
                        full_name: { $first: "$user.full_name" },
                        total_articles: { $sum: 1 }
                    }
                }
            ]
            let articles = await ArticleModel.aggregate(stages).exec();
            if (!articles.length)
                return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: false,
                    message: `No data found`,
                    data: null
                });
            res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                status: true,
                message: `Articles found success`,
                data: articles
            });
        } catch (error) {
            next(error);
        }
    },
    fetchSingleUserArticles: async (req, res, next) => {
        try {
            const schema = {
                type: 'object',
                properties: {
                    user_id: { type: 'string', minLength: 12 }
                },
                required: ['user_id']
            }
            const ajv = new Ajv();
            let valid = ajv.validate(schema, req.query);
            if (valid) {
                const userId = req.query.user_id;
                let articles = await ArticleModel.find({ user_id: mongoose.Types.ObjectId(userId) })
                    .populate({ path: 'user_id', select: 'full_name email country city' })
                if (!articles.length)
                    return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                        status: false,
                        message: `No data found`,
                        data: null
                    });
                res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: true,
                    message: `Articles found success`,
                    data: articles
                });
            } else {
                return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: false,
                    message: ajv.errorsText(),
                    data: null
                });
            }
        } catch (error) {
            next(error);
        }
    }
};

export default articleController;