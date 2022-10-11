import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || 'thisisverysecretkey547574747@$@&*@**(*@(78&$*t63743268726279';
import { CONSTANTS } from '../helpers/constants.js';
import UserModel from '../models/user.js';
/**
 * @module jwtVerify
 * @param req
 * @param res
 * @param  next
 * @description For user router authentication
 * */

export const jwtVerify = (req, res, next) => {
    let token;
    token = req.headers["access-token"];
    if (!token) {
        return res.status(CONSTANTS.REQUEST_CODES.UNAUTHORIZED).send({
            status: false,
            message: `No token provided`,
            data: null
        })
    }
    jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
            return res.status(CONSTANTS.REQUEST_CODES.UNAUTHORIZED).send({
                status: false,
                message: `Invalid Token`,
                data: null
            })
        }
        let user = await UserModel.findById(decoded.user_id).lean();
        if (user) {
            req.user_id = decoded.user_id;
            next();
        } else {
            return res.status(CONSTANTS.REQUEST_CODES.UNAUTHORIZED).send({
                status: false,
                message: `Invalid Token`,
                data: null
            })
        }
    });
};
