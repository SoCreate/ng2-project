'use strict';
var gulp = require('gulp');
var del = require('del');
var clientDependencies = require('../clientdependencies.json');
var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;
var syncRequest = require('sync-request');

module.exports = function() {
	var dest = 'src/client-dependencies'
	del.sync([dest]);

	var moduleSources = [];
	var modulesRootPath = './' + clientDependencies.modulesRootPath + '/';
	clientDependencies.dependencies.forEach(function (dependency) {
		moduleSources.push(modulesRootPath + dependency);
	});

	gulp.src(moduleSources, { base: clientDependencies.modulesRootPath })
		.pipe(gulp.dest(dest));

	var remoteSources = [];
	var remotesRootPath = './' + clientDependencies.remotesRootPath + '/';
	clientDependencies.remoteDependencies.forEach(function (dependencyUrl) {
		// TODO: might want to throw an error message if wrong remote url is used.
		var path = dependencyUrl.slice(dependencyUrl.indexOf('://') + 3);
		var fullPath = remotesRootPath + path;
		remoteSources.push(fullPath);

		if (!fs.existsSync(fullPath)) {
			mkdirp.sync(getDirName(fullPath), [], function (error) {
				if (error) {
					throw error;
				}
			});
			var data = syncRequest('GET', dependencyUrl)
			fs.writeFileSync(fullPath, data.getBody());
		}
	});

	gulp.src(remoteSources, { base: clientDependencies.remotesRootPath })
		.pipe(gulp.dest(dest));
}