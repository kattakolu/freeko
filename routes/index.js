var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index');
});

router.get('/register', function(req, res){
  res.render('register');
});

router.get('/profile', function(req, res){
  res.render('profile');
});

router.get('/login', function(req, res){
  res.render('login');
});

router.get('/timeline', function(req, res){
  res.render('timeline');
});

module.exports = router;
