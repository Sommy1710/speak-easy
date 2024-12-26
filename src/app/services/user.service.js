import {User} from "../schema/user.schema.js";
import { ConflictError } from '../../lib/error-definitions.js';

export const getUserById = async (id) =>
{
    return await User.findById(id);
}

export const getUserByEmail = async (email) =>
{
    return await User.findOne({email});
}

export const getUserByUserName = async (username) =>
{
    return await User.findone({username});
}
  

export const createUser = async (payload) =>
{
    const user = await User.findOne({
        email: payload.email,
        username: payload.username
    });

    if (user) throw new ConflictError('this email or username has been taken');

    if (!user) 
    {
        const exists = await User.findone({
            $or: [
                {email: payload.email},
                {username: payload.username}
            ]
        });

        if (exists) throw new ConflictError('this email or username has been taken');
    }

    return await User.create(payload);

};