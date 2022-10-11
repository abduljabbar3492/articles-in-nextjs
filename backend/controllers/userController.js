import UserModel from '../models/user.js';
import Ajv from "ajv"; //json schema validator
import { CONSTANTS } from '../helpers/constants.js';

const userSchema = {
    type: 'object',
    properties: {
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        full_name: { type: 'string' },
        username: { type: 'string' },
        email: { type: 'string' },
        building_number: { type: 'string' },
        district: { type: 'string', default: "" },
        city: { type: 'string' },
        mobile_number: { type: 'string' },
        country: { type: 'string' },
        password: { type: 'string', nullable: false, minLength: 4 }
    },
    required: ['first_name', 'last_name', 'full_name', 'username', 'email', 'password']
};
const loginSchema = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string', nullable: false, minLength: 4 }
    },
    required: ['email', 'password']
};
const userController = {
    register: async (req, res, next) => {
        try {
            const ajv = new Ajv();
            let valid = ajv.validate(userSchema, req.body);
            if (valid) {
                // find a user with same username || email
                let user = await UserModel.findOne({
                    username: new RegExp('^' + req.body.username + '$', "i"),
                    email: new RegExp('^' + req.body.email + '$', "i"),
                });
                if (user)
                    return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                        status: false,
                        message: `User already exists`,
                        data: null
                    });
                // if user doesn't exist 
                let newUser = new UserModel({
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
                res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: true,
                    message: `User successfully registered`,
                    data: newUser
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
    login: async (req, res, next) => {
        try {
            const ajv = new Ajv();
            let valid = ajv.validate(loginSchema, req.body);
            if (valid) {
                // find a user with same username || email
                let user = await UserModel.findOne({
                    email: new RegExp('^' + req.body.email + '$', "i"),
                });
                if (!user)
                    return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                        status: false,
                        message: `Email not exists`,
                        data: null
                    });
                const isMatched = user.isValidPassword(req.body.password);
                if (!isMatched)
                    return res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                        status: false,
                        message: `Wrong password`,
                        data: null
                    });
                res.status(CONSTANTS.REQUEST_CODES.SUCCESS).send({
                    status: true,
                    message: `User successfully logged In`,
                    data: user
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
    }
};

export default userController;