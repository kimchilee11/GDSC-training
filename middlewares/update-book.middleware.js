const Joi = require('joi');

const DATE_YYYY_MM_DD_FORMAT = /^\d{4}-\d{2}-\d{2}$/;

function updateBookMiddleware(req, res, next) {
    const schema = Joi.object({
        author_id: Joi.number().integer().required(),
        title: Joi.string().required(),
        updated_at: Joi.string().regex(DATE_YYYY_MM_DD_FORMAT).message('Invalid date format. Should be YYYY-MM-DD').optional(),
    });
   
    const { error, value } = schema.validate(req.body);

      
    if (error) {
        return res.status(400).send(error.details.map(e => e.message).join(', '));
    } 

    next();
}


module.exports = updateBookMiddleware;