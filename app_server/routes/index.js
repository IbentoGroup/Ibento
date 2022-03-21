var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
// require Controllers here

/* get home page */
router.get('/',function(req,res){
    res.render('homepage');
  });

module.exports = router;