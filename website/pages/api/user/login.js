// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connetMongo from '../../../helpers/connectMongo';
import User from '../../../models/user';
export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            console.log("api called")
            console.log("body", req.body)
            await connetMongo();
            console.log('CONNECTED TO MONGO');
            let user = await User.findOne({
                email: new RegExp('^' + req.body.email + '$', "i"),
            });
            if (!user)
                return res.status(200).send({
                    status: false,
                    message: `Email not exists`,
                    data: null
                });
            const isMatched = user.isValidPassword(req.body.password);
            if (!isMatched)
                return res.status(200).send({
                    status: false,
                    message: `Wrong password`,
                    data: null
                });
            res.status(200).send({
                status: true,
                message: `User successfully logged In`,
                data: user
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