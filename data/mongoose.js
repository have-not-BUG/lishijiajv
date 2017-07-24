var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mobile');
mongoose.connect('mongodb://mgusername:mgusername@ds149501.mlab.com:49501/mobile');
var db = mongoose.connection;
// db.on('error', console.error.bind(console, '数据库mongoose连接错误啊！:'));
// db.once('open', function() {
//     console.log("数据库mongoose连接成功");
// });

var blogSchema = new mongoose.Schema({
    name: String,
    sort: String,
    title:String,
    descrip:String,
    src:Array,
    graphic:Array,
    specifications:String,
    similarity:Array
}, {collection: 'post'});

var post = mongoose.model('post', blogSchema);

module.exports = post;