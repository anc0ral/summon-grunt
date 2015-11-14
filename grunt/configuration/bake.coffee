module.exports =

	compile_emails :
		files : [
			expand : true
			cwd : '<%= folders.emails_source_files %>'
			src : '*.htm'
			dest : '<%= folders.temporary %>'
		]