const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('/users', (req, res) => {
  userController.get(req, res);
});
router.get('/users/:id', (req, res) => {
  userController.getById(req, res);
});
router.post('/users', (req, res) => {
  userController.create(req, res);
});
router.put('/users/:id', (req, res) => {
  userController.update(req, res);
});
router.delete('/users/:id', (req, res) => {
  userController.delete(req, res);
});

module.exports = router;
