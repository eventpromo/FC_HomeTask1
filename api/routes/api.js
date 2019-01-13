const express = require('express');
const newsRouter = require('./news');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the API!',
}));

router.use(newsRouter);

module.exports = router;
