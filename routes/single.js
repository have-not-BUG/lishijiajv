var express = require('express');
var router = express.Router();

/* GET update page. */
router.get('/single', function(req, res, next) {
    var searchId=req.query.wd.toString();
    console.log(searchId);
    post.find({"_id":searchId},function (err,docs) {
            console.log(docs);
        res.render('single', { singletitle: "我是标题", singlecontent:docs});
    })
});
module.exports = router;