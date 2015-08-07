'use strict';
var tsd = require('gulp-tsd');

module.exports = function (callback) {
	tsd({
		command: 'reinstall',
		config: './tsd.json'
	}, callback);
}