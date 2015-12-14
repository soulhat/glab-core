'use strict';

var gulp = require('gulp'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util'),
	through = require('through'),
	plugins = require('gulp-load-plugins')({
		DEBUG: true,
		pattern: ['gulp-*', 'gulp.*'],
		
		scope: ['dependencies', 'devDependencies'],
		replaceString: /^gulp(-|\.)/,
		camelize: true,
		lazy: true,
		rename: {}
	}),
	paths = {
		coffee: ['controllers/**/*.coffee'],
		js: ['config/**/*.js']
	};

var defaultTasks = ['coffee', 'jshint', 'watch'];

gulp.task('coffee', function(){
	gulp.src(paths.coffee)
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('./controllers'));
});

gulp.task('jshint', function(){
	return gulp.src(paths.js)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(count('jshint', 'files lint free'));
});

gulp.task('watch', function(){
	gulp.watch(paths.coffee, ['coffee']);
});

function count(taskName, message) {
	var fileCount = 0;
	function countFiles(file){
		fileCount++;
	}
	function endStream(){
		gutil.log(gutil.colors.cyan(taskName + ': ') + fileCount + ' ' + message || 'files processed.');
		this.emit('end');
	}
	return through(countFiles, endStream);
}

gulp.task('development', defaultTasks);