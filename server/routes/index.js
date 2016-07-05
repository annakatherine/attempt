var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();

router.post('/',
  passport.authenticate('local', { successRedirect: '/views/success.html',
                                   failureRedirect: '/views/failure.html',
                                })
);

router.get('/', function(req, res) {
  console.log( 'hit router.get in index.js' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});
// public/views/index.html
// public/views/index.html
// public/views/index.html
module.exports = router;
