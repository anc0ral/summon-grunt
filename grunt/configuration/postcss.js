module.exports = {
    postcss: {
        options: {
            processors: [
                require('precss')()
            ]
        },

        src: 'src/styles.css',
        dest: 'dest/styles.css'
    }
}