'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function () {
	gulp.src('./src/**/*.scss')
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest('src/'));
}