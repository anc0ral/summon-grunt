module.exports =

	compile_styles :
		options :
			processors : [
				require('precss')()
				require('cssnano')(
					options =
						comments :
							removeAll : true

						autoprefixer :
							add : true

						zindex : false
				)
			]

		files : [
			expand : true
			cwd : '<%= folders.styles_source_files %>'

			src : [
				'*'
				'!emails.*'
			]

			dest : '<%= folders.stylesheets %>'
		]

	compile_emails :
		options :
			processors : [
				require('precss')()
				require('cssnano')(
					options =
						comments :
							removeAll : true

						autoprefixer :
							remove : false

						discardUnused : false
						zindex : false
						colormin : false
						mergeLonghand : false
				)
			]

		files : [
			expand : true
			cwd : '<%= folders.styles_source_files %>'
			src : 'emails.*'
			dest : '<%= folders.stylesheets %>'
		]