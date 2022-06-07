const menucontrollers = require ('./../controllers/menucontrollers');

const express = require('express');

const router = express.Router();

router.get('/',menucontrollers.index);

router.get ('/about', menucontrollers.about);

router.get ('/resume', menucontrollers.resume)



module.exports = router;