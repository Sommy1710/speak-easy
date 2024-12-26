import appConfig from "../../config/app.config.js";
import {sign, verify} from "jsonwebtoken";

export const generateToken = (payload) => {
    return sign(payload, appConfig.jwt.secret, {
        expiresIn: appConfig.jwt.expiresIn,
    });
};

export const verifyToken = (token) => {
    return verify(token, appConfig.jwt.secret);
}; 