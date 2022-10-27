var express = require('express');



var router = express.Router();



var x = Math.random();



var y = Math.random();








var val1="Math.cos(base)applied to "+ x + " is "+ Math.sign(x)
var val2="Math.asin(base)applied to "+ x + " is "+ Math.sign(x)
var val3="Math.asinh() applied to "+ x + " is "+ Math.tanh(x);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('computation', { title:'ANUDEEP SAGAR NAGOTHU  ',value1: val1, value2:vasl2, value3:val3, value4:val4 });
});

module.exports = router;
