http://sports.sina.com.cn/nba/ 'use strict';

var gulp = require('gulp'),
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
		js: ['config/**/*.js'],
		css: ['static/**/*.css'],
		less: ['static/**/*.less'],
		sass: ['static/**/*.sass']
	};

var defaultTasks = ['coffee', 'jshint', 'csslint', 'less', 'watch'];

gulp.task('env:development', function(){
	process.env.NODE_ENV = 'development';
});

gulp.task('coffee', function(){
	gulp.src(paths.coffee)
		.pipe(plugins.coffee({bare: true}).on('error', plugins.util.log))
		.pipe(gulp.dest('./controllers'));
});

gulp.task('jshint', function(){
	return gulp.src(paths.js)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(count('jshint', 'files lint free'));
});

gulp.task('csslint', function () {
	return gulp.src(paths.css)
		.pipe(plugins.csslint('.csslintrc'))
		.pipe(plugins.csslint.reporter())
		.pipe(count('csslint', 'files lint free'));
});

gulp.task('less', function () {
	return gulp.src(paths.less)
		.pipe(plugins.less())
		.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function(){
	gulp.watch(paths.coffee, ['coffee']);
	gulp.watch(paths.js, ['jshint']);	
	gulp.watch(paths.css, ['csshint']).on('change', plugins.livereload.changed);
	gulp.watch(paths.less, ['less']);
});

function count(taskName, message) {
	var fileCount = 0;
	function countFiles(file){
		fileCount++;
	}
	function endStream(){
		plugins.util.log(plugins.util.colors.cyan(taskName + ': ') + fileCount + ' ' + message || 'files processed.');
		this.emit('end');
	}
	return through(countFiles, endStream);
}

gulp.task('development', defaultTasks);