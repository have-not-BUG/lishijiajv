var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: '没了', name: '博客'});
});

module.exports = router;