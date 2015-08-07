'use strict';
String.prototype.endsWith = function (suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
function getFileNameNoExtension(filePath) {
	return filePath.slice(0, filePath.length - 3);
}
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var del = require('del');
var runSequence = require('run-sequence');

module.exports = function() {
	var port = 8000;
	connect.server({
		root: 'src',
		port: port,
		host: '127.0.0.1',
		fallback: 'src/index.html',
		livereload: true
    });

	gulp.src('./src/index.html')
		.pipe(open('', { url: 'http://localhost:' + port }));

    gulp.watch([
			'src/**/*.ts', 
			'src/**/*.js', 
			'src/**/*.js.map', 
			'src/**/*.scss',
			'src/**/*.css', 
			'src/**/*.html'], function (fileInfo) {
		var filePath = fileInfo.path;
		if (filePath.endsWith('.ts')) {
			if (fileInfo.type === 'deleted') {
				var prefix = getFileNameNoExtension(filePath);
				del([prefix + '.js', prefix + '.js.map']);
			} else {
				runSequence('compile-ts');
			}
		} else if(filePath.endsWith('.scss')) {
			if (fileInfo.type === 'deleted') {
				del([getFileNameNoExtension(filePath) + '.css']);
			} else {
				runSequence('compile-sass');
			}
		} else {
			gulp.src(filePath).pipe(connect.reload());
		}
    });
}