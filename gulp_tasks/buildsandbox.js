'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

module.exports = function () {
	gulp.src('./src/index.html')
		.pipe(rename('sandbox.html'))
		.pipe(replace('System.import(\'index\')', 'System.import(\'sandbox\')'))
		.pipe(gulp.dest('./src'));
	gulp.src('./src/index.ts')
		.pipe(rename('sandbox.ts'))
		.pipe(gulp.dest('./src'));
}