const express = require('express');
const accountController = require('../controllers/account');
const passport = require('../middlewares/passport');

const router = express.Router();

router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  accountController.login(req, res);
});

module.exports = router;
