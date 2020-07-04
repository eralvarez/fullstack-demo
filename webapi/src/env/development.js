'use strict';

require('dotenv').config();
const path = require('path');

module.exports = {
    environment: process.env.NODE_ENV,
    server: {
        port: process.env.SERVER_PORT,
    },
    database: {
        host: process.env.DB_HOST,
        schema: process.env.DB_SCHEMA,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        seedersPath: path.resolve('./src/db', 'seeders/dev'),
    },
    email: {
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 465,
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD,
    },
    jwt_secret: process.env.JWT_SECRET,
};
