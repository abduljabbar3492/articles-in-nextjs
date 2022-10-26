

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connetMongo from '../../../helpers/connectMongo';
import Article from '../../../models/article';
import User from '../../../models/user';
import { Types } from 'mongoose';
export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            await connetMongo();
            const userId = req.query.user_id;
            let articles = await Article.find({ user_id: Types.ObjectId(userId) })
                .populate({ path: 'user_id', select: 'full_name email country city' })
            if (!articles.length)
                return res.status(403).send({
                    status: false,
                    message: `No data found`,
                    data: null
                });
            res.status(200).send({
                status: true,
                message: `Articles found success`,
                data: articles
            });

        }
    } catch (error) {
        console.log("Error", error)
        res.status(200).send({
            status: false,
            message: `Something went wrong`,
            data: error
        });
    }
}
