var express = require('express');
var router = express.Router();

/* GET suppliers listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
