var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/underconstruction', function(req, res, next) {
    res.render('underconstruction', { title: '没了', name: '博客'});
});

module.exports = router;