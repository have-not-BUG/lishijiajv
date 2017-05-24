var express = require('express');
var router = express.Router();

/* GET search page. */


router.get('/sortsearch', function(req, res, next) {
    var sortsearchWord=req.query.wd.toString();
    post.find({"sort":sortsearchWord},function (err,docs) {
        if (err){
            console.log(err);
            return ;
        }

        res.render('sortsearch', { title1: req.query.wd, content1:docs});
    });


});


module.exports = router;