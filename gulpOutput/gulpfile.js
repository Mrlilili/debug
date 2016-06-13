var gulp = require('gulp');

var cssSprite = require('gulp-css-spritesmith');

//拼接雪碧图
gulp.task('sprites', function () {
    console.log(4);
    gulp.src('./output/css/*.css')
        .pipe(cssSprite({
            imagepath: './output/imgs/slice/',
            spritedest: './output/imgs/sprite/',
            spritepath: '../imgs/sprite/'
        }))
        .pipe(gulp.dest('./'));
    console.log(5);
});

//文件移动
gulp.task('moveFile',function(){
    gulp.src('./public/css/*')
        .pipe(gulp.dest('./output/css/'));
    gulp.src('./public/imgs/*/*')
        .pipe(gulp.dest('./output/imgs/'));

})

gulp.task('build',['moveFile','sprites']);