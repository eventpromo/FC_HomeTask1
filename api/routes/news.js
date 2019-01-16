const express = require('express');
const newsController = require('../controllers/news');

const router = express.Router();

router.get('/news', (req, res) => {
  newsController.get(req, res);
});
router.get('/news/:id', (req, res) => {
  newsController.getById(req, res);
});
router.post('/news', (req, res) => {
  newsController.create(req, res);
});
router.put('/news/:id', (req, res) => {
  newsController.update(req, res);
});
router.delete('/news/:id', (req, res) => {
  newsController.delete(req, res);
});

module.exports = router;
