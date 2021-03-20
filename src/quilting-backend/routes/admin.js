const express = require('express');
const user = require('../models/user');
const isAuth = require('../middleware/isAuth')
const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/login', adminController.login);

router.post('/images', isAuth, adminController.postAddImages);

module.exports = router;