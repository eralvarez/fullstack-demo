'use strict';

const config = require('../../env');

module.exports = {
    development: {
        username: config.database.user,
        password: config.database.password,
        database: config.database.schema,
        host: config.database.host,
        dialect: config.database.dialect,
        logging: true,
        dialectOptions: {
            options: {
                useUTC: false,
                dateFirst: 1,
                enableArithAbort: true,
                trustServerCertificate: true
            }
        }
    },
};
