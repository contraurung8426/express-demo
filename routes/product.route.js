var express = require('express');

var controller = require('../controllers/products.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/detail:id', controller.detail);

router.get('/search', controller.search);

module.exports = router;