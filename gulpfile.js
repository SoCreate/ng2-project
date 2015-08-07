var gulp = require('gulp');

gulp.task('get-tsds', function (callback) {
	require('./gulp_tasks/gettsds')(callback);
});

gulp.task('client-dependencies', function () {
	require('./gulp_tasks/clientdependencies')();
});

gulp.task('compile-ts', function () {
	require('./gulp_tasks/compilets')();
});

gulp.task('compile-sass', function () {
	require('./gulp_tasks/compilesass')();
});

gulp.task('build-sandbox', function () {
	require('./gulp_tasks/buildsandbox')();
});

gulp.task('watch-ts', ['compile-ts'], function () {
	gulp.watch('src/**/*.ts', ['compile-ts']);
});

gulp.task('serve', ['compile-ts', 'compile-sass'], function () {
	require('./gulp_tasks/serve')();
});

gulp.task('default', function () {
	require('run-sequence')('get-tsds', [
		'client-dependencies',
		'compile-ts',
		'compile-sass'
	]);
});