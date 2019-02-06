const express = require('express');
const accountController = require('../controllers/account');

const router = express.Router();

router.post('/login', (req, res) => {
  accountController.login(req, res);
});

module.exports = router;
