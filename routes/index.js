let express = require('express');
let router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('index', {title:"Home"})
  
});

// get page about // 
router.get('/Tutorial', function(req, res, next) {
  res.render('index', {title:"Tutorial"});
});


// Get Contact Page // 
router.get('/Contacts', function(req, res, next) {
  res.render('index', {title: "contact"});
});



// Get posts page // 







module.exports = router;
