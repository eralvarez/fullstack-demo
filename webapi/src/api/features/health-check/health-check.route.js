'user strict'

const router = require('express').Router();

const healthCheckCtrl = require('./health-check.controller');


router.get('/', healthCheckCtrl.doHealthCheck);

module.exports = router;