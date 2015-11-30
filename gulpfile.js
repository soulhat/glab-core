'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var mocha = require('gulp-mocha');

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
gulp.task('default', ['test']);