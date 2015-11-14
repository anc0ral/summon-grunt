module.exports =

	compile_emails :
		options :
			removeStyleTags : false
			applyWidthAttributes : true
			applyHeightAttributes : true
			applyAttributesTableElements : true
			webResources :
				images : false

			xmlMode : true
			preserveImportant : true

		files : [
			expand : true
			cwd : '<%= folders.temporary %>'
			src : '*.htm'
			dest : '<%= folders.emails %>'
		]