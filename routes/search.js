var express = require('express');
var router = express.Router();

/* GET search page. */
router.get('/search', function(req, res, next) {
    var searchWord=req.query.wd.toString(),
    midWord=searchWord+"+",
    endWord=new RegExp(midWord);
    console.log("前!!!",endWord);//查询词
    post.find({"title":endWord},{"similarity":0},function (err,docs) {
        if (err){
            console.log(err);
            return ;
        }
        console.log("后!!!!", docs);
        res.render('search', { title1: req.query.wd, content1:docs});
    });

});
router.post('/search', function(req, res) {
    var content = req.body.content;
    var date = req.body.date;

    if (content && date) {
        var newPost = new post({
            content: content,
            date: date
        });

        newPost.save(function (err) {
            if (err) {
                console.error(err);
                return;
            }
            // newPost is saved!
            console.log('保存成功！');
            res.send(200);
        });
    }
});

module.exports = router;