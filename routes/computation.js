var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var digit = Math.atan2(req.query.x)
    var digit1 = Math.atanh(req.query.x)
    var digit2 = Math.cbrt(req.query.y) 
  res.send('The result is' +"digit----" +digit+"-----" +"digit1------"+digit1+"------" +"digit2------"+digit2 );
});

module.exports = router;
