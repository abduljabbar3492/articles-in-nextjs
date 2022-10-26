// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connetMongo from '../../../helpers/connectMongo';
import User from '../../../models/user';
export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            console.log("api called")
            await connetMongo();
            console.log('CONNECTED TO MONGO');
            console.log("req.body", req.body)
            let user = await User.findOne({
                username: new RegExp('^' + req.body.username + '$', "i"),
                email: new RegExp('^' + req.body.email + '$', "i"),
            });
            if (user)
                return res.status(200).send({
                    status: false,
                    message: `User already exists`,
                    data: null
                });
            // if user doesn't exist 
            let newUser = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                full_name: req.body.full_name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                building_number: req.body.building_number ? Number(req.body.building_number) : 0,
                district: req.body.district ? req.body.district : "",
                city: req.body.city ? req.body.city : "",
                country: req.body.country ? req.body.country : "",
                mobile_number: req.body.mobile_number ? req.body.mobile_number : ""
            });
            //generate access token 
            newUser.access_token = newUser.generateJWT();
            await newUser.save();
            res.status(200).send({
                status: true,
                message: `User successfully registered`,
                data: newUser
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
