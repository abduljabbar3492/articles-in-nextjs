// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connetMongo from '../../../helpers/connectMongo';
import Article from '../../../models/article';
import { Types } from 'mongoose';
export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await connetMongo();
      const data = req.body;
      let { title, content } = req.body;
      let newArticle = new Article({
        title, content, user_id: Types.ObjectId(req.body.user_id)
      });
      await newArticle.save();
      res.status(201).send({
        status: true,
        message: `Article successfully saved`,
        data: newArticle
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
