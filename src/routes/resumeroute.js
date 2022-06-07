const express = require('express');
const menucontrollers = require('../controllers/menucontrollers');

const router = express.Router();




router.get ('/resume', menucontrollers.resume)



module.exports = router;