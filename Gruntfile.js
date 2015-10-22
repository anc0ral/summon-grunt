module.exports = function(grunt) {

	// Automatically tracks time for each Grunt process
	require('time-grunt')(grunt);

	// Container
	var path = require('path');
	var current = process.cwd();
	var gruntjs = 'grunt';
	var configuration = '/configuration';
	var folders = '/folders.yaml';
	var override = '/override';

	require('load-grunt-config')(grunt, {

		/* Makes use of the JIT Grunt plug-in’s default path for external files to load the custom tasks
		   'overridePath' is being used to keep the configuration files seperate from the build tasks */
		configPath: [
			path.join(current, gruntjs),
			path.join(current, gruntjs + configuration),
			path.join(current, gruntjs + override),
			path.join(current, gruntjs + override + configuration),
		],

		data: {
			folders: (function() {

				if (grunt.file.isFile(gruntjs + override + folders)) {
					return grunt.file.readYAML(gruntjs + override + folders)
				} else {
					return grunt.file.readYAML(gruntjs + configuration + folders)
				}

			}())
		},

		jitGrunt : {
			staticMappings : {

				// Fixes the 'grunt gui' command
				gui : 'grunt-peon-gui'
			}
		}

	})

}