'use strict';

const joi = require('joi');

const apiResponse = require('@shared/services/response/apiResponse');
const partsModel = require('./parts.model');
const partsSchema = require('./parts.schema');

async function getParts(req, res, next) {
    try {
        const queryResponse = await partsModel.getAllParts();
    
        apiResponse.success(res, queryResponse.data);
    } catch (error) {
        console.error(error);
        apiResponse.conflict(res);
    }
}

async function createParts(req, res, next) {
    const formValidation = joi.validate(
        req.body,
        partsSchema.createMultipleParts,
        { stripUnknown: true }
    );

    if (!formValidation.error) {
        const { error } = await partsModel.createMultipleParts(formValidation.value);

        if (error) {
            apiResponse.error(res, error);
        } else {
            apiResponse.created(res);
        }
    } else {
        apiResponse.error(res, formValidation.error);
    }
}


module.exports = {
    getParts,
    createParts,
};