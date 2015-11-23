module.exports = function(grunt) {

	// Automatically tracks time for each Grunt process
	require('time-grunt')(grunt);

	// JavaScript object was not used to contain the variables so they can be chained together easily
	var path = require('path');
	var current = process.cwd();
	var gruntjs = 'grunt';	// Different to avoid namespace issues
	var configuration = '/configuration';
	var override = '/override';
	var folders = '/folders.yaml';

	// Checks for the existence of an override folder & defines it if found
	if (grunt.file.isDir(gruntjs + override)) {

		// Prints as 'undefined' whenever the if statement fails
		var overridedir = [
			path.join(current, gruntjs + override),
			path.join(current, gruntjs + override + configuration)
		]

	};

	require('load-grunt-config')(grunt, {

		// Keeps the configuration files in a folder seperate from the build tasks
		configPath : [
			path.join(current, gruntjs),
			path.join(current, gruntjs + configuration)
		],

		overridePath : overridedir,

		data : {
			folders : (function() {

				// Looks for the 'folders.yaml' file in the override folder & includes a fallback when false
				if (grunt.file.isFile(gruntjs + override + folders)) {
					grunt.file.readYAML(gruntjs + override + folders)
				} else {
					grunt.file.readYAML(gruntjs + folders)
				}

			})()
		},

		jitGrunt : {

			// Sometimes automatic mapping of Grunt configurations to their plugins fail, this can be rectified by manually matching them below
			staticMappings : grunt.file.readJSON(gruntjs + '/options.json')
		}

	})

}