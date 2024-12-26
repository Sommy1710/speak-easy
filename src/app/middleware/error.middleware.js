import { BadRequestError, InternalServerError, NotFoundError, UnauthenticatedError, UnauthorizedError, ValidationError } from "../../lib/error-definitions.js";

const errorMiddleware = (err, req, res, next) =>
{
    if(err instanceof NotFoundError || err instanceof BadRequestError || err instanceof UnauthorizedError || err instanceof UnauthenticatedError || err instanceof InternalServerError)
    {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    if (err instanceof ValidationError)
    {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }

    //in the event that it is not an instance of any of the above we do
    return res.status(500).json({
        success: false,
        message: err.message,
    });
};

export default errorMiddleware;