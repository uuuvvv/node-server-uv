var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('123')
});
/* GET home page. */
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('456')
});
router.get('/user', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('4545787')
});
module.exports = router;
