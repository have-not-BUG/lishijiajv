var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sort', function (req, res, next) {

    res.render('sort', {title: '没了', name: '博客'});

});

module.exports = router;