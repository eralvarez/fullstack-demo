'use strict';

const queryResponse = require('@shared/services/response/queryResponse');
const db = require('../../../db/models').sequelize;
const Part = db.model('part');


async function createMultipleParts(partsToAdd) {
    let response = queryResponse.buildResponse();

    try {
        let transactionResponse = await db.transaction(async (t) => {

            for (let partIndex = 0; partIndex < partsToAdd.length; partIndex++) {
                const part = partsToAdd[partIndex];

                if (part.category == 20) {
                    throw new Error('category not allowed');
                }
                
                await Part.create(part, {
                    transaction: t,
                });
            }

            return 1;
        });

        response.data = transactionResponse;
    } catch (error) {
        response.error = error;
    } finally {
        return response;
    }
}

async function getAllParts() {
    let response = queryResponse.buildResponse();

    try {
        let parts = await Part.findAll();

        parts = JSON.parse(JSON.stringify(parts));
        response.data = parts;
    } catch (error) {
        response.error = error;
    } finally {
        return response;
    }
}


module.exports = {
    getAllParts,
    createMultipleParts,
};
