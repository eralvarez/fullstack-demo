'use strict';

const router = require('express').Router();

const healthCheckRoute = require('./health-check/health-check.route');
const partsRoute = require('./parts/parts.route');

router.use('/health-check', healthCheckRoute);
router.use('/parts', partsRoute);

module.exports = router;
