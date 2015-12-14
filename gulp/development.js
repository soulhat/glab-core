'use strict';

var gulp = require('gulp'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util'),
	paths = {
		coffee: ['controllers/**/*.coffee']
	};
var defaultTasks = ['coffee', 'watch'];
gulp.task('coffee', function(){
	gulp.src(paths.coffee)
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('./controllers'));
});

gulp.task('watch', function(){
	gulp.watch(paths.coffee, ['coffee']);
})

gulp.task('development', defaultTasks);