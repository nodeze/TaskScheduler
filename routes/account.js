var express = require('express');
var router = express.Router();
/* login. */
router.get('/login', function(req, res, next) {
  res.render("account/login",{});
});
module.exports = router;
