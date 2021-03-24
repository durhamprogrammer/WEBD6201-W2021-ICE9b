import express = require('express');
let router = express.Router();

/* GET home page - default route. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});

/* GET home page - home route. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home' });
});


module.exports = router;
