'use strict';

const apiResponse = require('@shared/services/response/apiResponse');
const config = require('@env');


async function doHealthCheck(req, res, next) {
    let responseMessage = {
        status: true,
        message: 'webapi running',
        environment: config.environment,
    };

    apiResponse.success(res, responseMessage);
}

module.exports = {
    doHealthCheck,
};