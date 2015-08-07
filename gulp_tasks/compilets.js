'use strict';
var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

module.exports = function() {
	var tsProject = tsc.createProject('tsconfig.json', {
		typescript: require('typescript')
	});
	gulp.src('./src/**/*ts')
		.pipe(sourcemaps.init())
		.pipe(tsc(tsProject))
		.pipe(sourcemaps.write('./', { sourceRoot: '/' }))
		.pipe(gulp.dest('src/'));
}