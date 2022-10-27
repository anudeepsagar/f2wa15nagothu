var express = require('express');

var router = express.Router();

var x = Math.random();



var y = Math.random();

var val1="Math.cos(x)applied to "+ x + " is "+ Math.cos(x)
var val2="Math.asin(x)applied to "+ x + " is "+ Math.asin(x)
var val3="Math.asinh(x) applied to "+ x + " is "+ Math.asinh(x);

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('computation', { title:'ANUDEEP SAGAR NAGOTHU  ',value1: val1, value2:val2, value3:val3});
});

module.exports = router;
