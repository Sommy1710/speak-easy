import * as userService from './user.service.js'

export const authenticateUser = async (req, res) => 
{
    
};
export const registerUser = async (payload) =>
{
    return await userService.createUser({username, password, email });
}