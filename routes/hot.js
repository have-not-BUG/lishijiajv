var express = require('express');
var router = express.Router();

/* GET search page. */


router.get('/hot', function (req, res, next) {
    // var searchWord=req.query.wd.toString(),
    // midWord=searchWord+"+",
    // endWord=new RegExp(midWord);
    post.find({"hot": "yes"}, {"similarity": 0}, function (err, docs) {
        if (err) {
            console.log(err);
            return;
        }
        res.render('hot', {title1: req.query.wd, content1: docs});
    });

});
// router.post('/search', function(req, res) {
//     var content = req.body.content;
//     var date = req.body.date;
//
//     if (content && date) {
//         var newPost = new post({
//             content: content,
//             date: date
//         });
//
//         newPost.save(function (err) {
//             if (err) {
//                 console.error(err);
//                 return;
//             }
//             // newPost is saved!
//             console.log('保存成功！');
//             res.send(200);
//         });
//     }
// });











module.exports = router;