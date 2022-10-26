// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connetMongo from '../../../helpers/connectMongo';
import Article from '../../../models/article';
import { Types } from 'mongoose';
export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      await connetMongo();
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
    let articles = await Article.aggregate(stages).exec();
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
