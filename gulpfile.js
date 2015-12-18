'use strict';
// gulp setting
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    mocha = require('gulp-mocha'),
    env = process.env.NODE_ENV || 'development';
require('require-dir')('./gulp');
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('test', function () {
    return gulp.src('./test', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
})
gulp.task('default', function (defaultTasks){
    gulp.start(env);
});