const express = require('express');
const menucontrollers = require('../controllers/menucontrollers');

const router = express.Router();



router.get ('/about', menucontrollers.about)





module.exports = router;