var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
// var imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');


// paths
var paths = {
     scripts: [],
     images:[],
     html:['./app/*.html'],
     js:['./app/scripts/*.js'],
     build_js:['./app/build/scripts/']
}


gulp.task('connect', function () {
    connect.server({
        root: ['./app'],
        port: 9001,
        browser: 'chrome',
        livereload: true // livereload
    });
})
// define task
gulp.task('scripts', function () {
    return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('./app/build/scripts'))
    .pipe(connect.reload());
});
gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(connect.reload());
});

gulp.task('watch', function (argument) {
    gulp.watch(paths.html,['html']);
    gulp.watch(paths.js,['scripts']);
});

gulp.task('default',['watch','connect']);
