var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/weizhang', function(req, res, next) {
    res.render('weizhang', { title: '没了', name: '博客'});
});

module.exports = router;