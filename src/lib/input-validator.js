
const validator = (schema, request) =>
{
    const errors = {}; // define an error object to hold all the errors
    const {error, value} = schema.validate(request, {abortEarly: false}); //validating the input against the schema
    if (error)
    {
        //break down the errors and store them in this format: {field: message}
        error.details.forEach(({path, message}) =>
        {
            errors[path] = message;
        });
        return {errors};
    
    }
    return {value};
}
export default validator;