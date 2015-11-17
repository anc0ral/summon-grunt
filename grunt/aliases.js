module.exports = function(grunt) {
	if(grunt.file.isDir('templ')) {
		grunt.registerTask('compile_emails', function(){
	      // get first task's `src` config property and see
	      // if any file matches the glob pattern
	        // if so, run the task chain
	        grunt.task.run([
				'postcss:compile_emails',
				'bake:compile_emails',
				'inlinecss:compile_emails'
	        ])
		});
	}
}