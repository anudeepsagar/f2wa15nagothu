var express = require('express');



var router = express.Router();



var x = Math.random();



var y = Math.random();








var val1="Math.pow(base, exponent) applied to "+ x +"and"+ y +" is "+ Math.pow(x, y)
var val2="Math.log(x) applied to "+ x + " is "+ Math.log(x)



var val3= "Math.log10(x) applied to "+ x + " is "+ Math.log10(x);
var val4= "Math.log10(x) applied to "+ x + " is "+ Math.log10(x);





/* GET home page. */



router.get('/', function(req, res, next) {



  res.render('computation', { title:'ABDUL RAHEEM SYED   ',value1: val1, value2:vasl2, value3:val3, value4:val4 });



});





module.exports = router;