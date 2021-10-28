var express = require('express');
var router = express.Router();
let z=0
/* GET users listing. */
router.get('/', function(req, res, next) {
  z++
  res.send("User accesses are: "+z);
});

module.exports = router;
