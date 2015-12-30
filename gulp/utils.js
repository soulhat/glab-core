'use strict';

var gulp = require('gulp');
var px2rem = require('gulp-px3rem');
 
gulp.task('px2rem', function() {
    gulp.src('./*.css')
        .pipe(px2rem())
        .pipe(gulp.dest('./dest'))
});
/*
px2rem({
    baseDpr: 2,             // base device pixel ratio (default: 2)
    threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
    remVersion: true,       // whether to generate rem version (default: true)
    remUnit: 75,            // rem unit value (default: 75)
    remPrecision: 6         // rem precision (default: 6)
})
*/