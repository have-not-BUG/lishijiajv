var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '没了', name: '博客'});
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: '没了', name: '博客'});
});
module.exports = router;