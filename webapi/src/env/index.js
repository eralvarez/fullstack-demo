'use strict';

const devEnv = require('./development');
const prodEnv = require('./production');

if (process.env.NODE_ENV === 'production') {
    module.exports = prodEnv;
} else {
    module.exports = devEnv;
}
