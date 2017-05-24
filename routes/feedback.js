var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/feedback', function(req, res, next) {
    res.render('feedback', { title: '没了', name: '博客'});
});

module.exports = router;