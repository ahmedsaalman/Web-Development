const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authController');
router.post('/register', authCtrl.register);
module.exports = router;

router.post('/login', authCtrl.login);
app.use('/auth', router);