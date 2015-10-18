module.exports = function(grunt) {

	// Automatically tracks time for each Grunt process
	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt, {

		/* Makes use of the JIT Grunt plug-in’s default path for external files to load the custom tasks
		   'overridePath' is being used to keep the configuration files seperate from the build tasks */
		overridePath : require('path').join(process.cwd(), 'grunt/configuration'),

		data: {
			folders: (function() {

				if (grunt.file.isFile('grunt/Overridefolders.yaml')) {
					return grunt.file.readYAML('grunt/Overridefolders.yaml')
				} else {
					return grunt.file.readYAML('grunt/folders.yaml')
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