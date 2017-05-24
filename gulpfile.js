// 添加引用
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');


//这个可以让express启动
gulp.task("node", function() {
    nodemon({
        script: './bin/www',
        ext: 'js html',
        env: {
            'NODE_ENV': 'development'
        }
    })
});


gulp.task('server', ["node"], function() {
    var files = [
        'views/**/*.html',
        'views/**/*.ejs',
        'views/**/*.jade',
        'public/**/*.*'
    ];

    //gulp.run(["node"]);
    browserSync.init(files, {
        proxy: 'http://localhost:3000',
        browser: 'chrome',
        notify: false,
        port: 4001
    });

    gulp.watch(files).on("change", reload); 
});

var svgSymbols = require('gulp-svg-symbols');

gulp.task('sprites', function () {
    return gulp.src('public/images/分类icon/*.svg')
        .pipe(svgSymbols())
        .pipe(gulp.dest('svgggggggggggg'));
});


