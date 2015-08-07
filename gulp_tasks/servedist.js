'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');


module.exports = function() {
	var port = 8001;
	connect.server({
		root: 'dist',
		port: port,
		host: '127.0.0.1',
		fallback: 'dist/index.html',
		livereload: false
    });
	gulp.src('./dist/index.html')
		.pipe(open('', { url: 'http://localhost:' + port }));
}