var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/task3',function(req,res){
  res.render('task3',{message:""});
})

router.post('/task3',function(req,res){
  let username = req.body.username;
  let password = req.body.password;
  if(username == "admin"){
    if(password == "admin"){
      res.send(done);
    }
    res.status(200).render('task3',{message:"Invalid Password"});
  };
  res.status(200).render('task3',{message:"Invalid Username"});
});

router.get('/task1',function(req,res){
  res.render('task1',{message:""});
})

router.post('/task1',function(req,res){
  let username = req.body.username;
  let password = req.body.password;
  if(username == "admin" || username =='harsh'){
    return res.status(302).render('task1',{message:"Invalid username or Password"});
  };
  res.status(200).render('task1',{message:"Invalid username or Password"});
});


module.exports = router;
