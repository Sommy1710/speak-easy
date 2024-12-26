
import { BadRequestError, ValidationError } from '../../lib/error-definitions.js';
import asyncHandler from '../../lib/async-handler.js';
import * as authService from '../services/auth.service.js';
import validator from '../../lib/input-validator.js';
import { RegisterRequest } from '../requests/register.request.js';

export const registerUser = asyncHandler(async (req, res) => 
{
    const {username, password, email} = req.body;

    //validate the request body
    const {errors} = validator(RegisterRequest, req.body);
    if (errors) throw new ValidationError('the request failed with the following errors', errors);

  

    const user = await authService.registerUser({username, password, email});

    return res.status(201).json({
        success: true,
        message: 'user registered successfully',
        data: {
            user:{
                id: user._id,
                username: user.username,
                email: user.email
            }

        }
    })
});