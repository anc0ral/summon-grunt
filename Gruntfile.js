module.exports = function(grunt) {

	// Automatically tracks time for each Grunt process
	require('time-grunt')(grunt);

	var object = {
		path : require('path'),
		current : process.cwd(),
		grunt : 'grunt',
		get configuration() {
			return this.grunt + '/configuration'
		},
		get override() {
			return this.grunt + '/Overridefolders.yaml'
		}
	}

	require('load-grunt-config')(grunt, {

		/* Makes use of the JIT Grunt plug-in’s default path for external files to load the custom tasks
		   'overridePath' is being used to keep the configuration files seperate from the build tasks */
		configPath: [
			object.path.join(object.current, object.grunt),
			object.path.join(object.current, object.configuration)
		],

		data: {
			folders: (function() {

				if (grunt.file.isFile(object.override)) {
					return grunt.file.readYAML(object.override)
				} else {
					return grunt.file.readYAML(object.grunt + '/folders.yaml')
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