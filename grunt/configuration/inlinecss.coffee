module.exports =

	compile_emails :
		options :
			removeStyleTags : false
			applyWidthAttributes : true
			applyAttributesTableElements : true
			webResources :
				images : false

		files : [
			expand : true
			cwd : '<%= folders.temporary %>'
			src : '*.htm'
			dest : '<%= folders.emails %>'
		]