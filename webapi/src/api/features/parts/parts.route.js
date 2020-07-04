'user strict'

const router = require('express').Router();

const partsCtrl = require('./parts.controller');

router.get('/', partsCtrl.getParts);
router.post('/', partsCtrl.createParts);

module.exports = router;