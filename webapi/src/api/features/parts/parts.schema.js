// https://github.com/hapijs/joi/blob/v14.3.1/API.md
const joi = require('joi');

const createPart = joi.object().keys({
    temp: joi.bool().required(),
    part: joi.string().required(),
    category: joi.number().integer().required(),
    qty: joi.number().integer().required(),
    unit_cost: joi.string().required().allow(null),
});

const createMultipleParts = joi.array().items(createPart);

module.exports = {
    createPart,
    createMultipleParts,
};
