var express = require('express');
var multer = require('multer');

var controller = require('../controllers/user.controller');

var user_validate = require('../validate/user.validate');

var upload = multer({dest: './public/uploads/'})

var router = express.Router();

router.get('/', controller.index);
  
router.get('/create', controller.create);

router.get('/search', controller.search);

router.get('/:id', controller.view);
  
router.post('/create',
    upload.single('avatar'),
    user_validate.postCreate,
    controller.post_create
);

module.exports = router;