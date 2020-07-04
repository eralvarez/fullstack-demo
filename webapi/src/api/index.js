'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const config = require('../env');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api/v1', require('./features'));

app.get('/*', function (req, res) {
    res.status(404).json({
        message: 'Not Found'
    });
});

const server = app.listen(config.server.port, () => {
    const line = (new Array(80)).join('_');
    console.info(line);
    console.info(`Express server running at http://localhost:${config.server.port}`);
    console.info('  > start: ' + new Date());
    console.info(line + '\n');
});

module.exports = server;
