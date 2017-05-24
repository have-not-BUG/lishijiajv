var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function (req, res, next) {
    res.render('about', {title: '没了', name: '博客'});
});

module.exports = router;