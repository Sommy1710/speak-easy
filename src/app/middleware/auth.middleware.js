import {verifyToken } from '../providers/jwt.provider.js'
import {UnauthenticatedError} from '../../lib/error-definitions.js';

export const authMiddleware = (req, res, next) =>
{
    const token = req.headers.authorization;

    if (!token) throw new UnauthenticatedError('Invalid or missing token');
 
    try
    {
        const user = verifyToken(token);
        req.user = user;
        return next();
    }
    catch(error)
    {
        throw new UnauthenticatedError('Invalid or missing token');

    }

}
export default authMiddleware; 