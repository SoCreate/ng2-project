'use strict';
var gulp = require('gulp');
var del = require('del');

module.exports = function () {
	var dest = 'dist'
	del.sync([dest]);

	gulp.src([
		'src/**/*.*',
		'!src/**/*.ts',
		'!src/**/*.scss',
		'!src/sandbox.html',
		'!src/sandbox.js'
	]).pipe(gulp.dest('dist'));
}