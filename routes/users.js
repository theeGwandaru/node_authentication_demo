var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
const userController = require('../controllers/userController');
const auth = require('./auth');
const logger = require('../config/winston');

/* GET users listing. */
router.get('/', auth.required, function(req, res, next) {
  logger.info(req.originalUrl);
  let loggedInUser = req.payload;
  logger.info(loggedInUser);
  res.send('respond with a resource');
});

router.post('/login', auth.optional, userController.login)

module.exports = router;
