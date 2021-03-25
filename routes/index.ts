import express = require('express');
let router = express.Router();

/* GET home page - default route. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page - home route. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home'  });
});

/* GET about page - about route. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about'  });
});

/* GET projects page - projects route. */
router.get('/projects', function(req, res, next) 
{
  res.render('index', { title: 'Our Projects', page: 'projects'  });
});

/* GET services page - services route. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services'  });
});

/* GET contact page - contact route. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact'  });
});

/* GET login page - login route. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login'  });
});

/* GET register page - register route. */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register'  });
});



module.exports = router;
