const express = require('express');
const newsRouter = require('./news');
const userRouter = require('./user');
const passport = require('../middlewares/passport');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the API!',
}));

router.use(passport.authenticate('jwt', { session: false }), newsRouter);
router.use(passport.authenticate('jwt', { session: false }), userRouter);

module.exports = router;
