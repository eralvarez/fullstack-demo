require('module-alias/register');

const chalk = require('chalk');
const db = require('./db/models').sequelize;

function startServer() {
    const server = require('./api/');
}

// Validate DB connection and then start server
db.authenticate()
    .then(startServer)
    .catch((err) => {
        console.error(chalk.red(err.stack));
    });
