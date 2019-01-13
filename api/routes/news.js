const express = require('express');
const newsController = require('../controllers/news');

const router = express.Router();

router.get('/news', newsController.get);
router.get('/news/:id', newsController.getById);
router.post('/news', newsController.create);
router.put('/news/:id', newsController.update);
router.delete('/news/:id', newsController.delete);

module.exports = router;
