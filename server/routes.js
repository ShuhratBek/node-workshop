const Router = require('express').Router;
const router = new Router();

const user = require('./model/user/router');
const movies = require('./model/movies/router');

router.route('/').get((req, res) => {
  res.json({
    message: 'Welcome to Demo-API'
  });
});

router.use('/user', user);
router.use('/movies', movies);

module.exports = router;
