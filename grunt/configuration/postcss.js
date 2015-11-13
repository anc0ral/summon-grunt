module.exports = {
    options: {
        processors: [
            require('precss')()
        ]
    },
    dist: {
        src: 'src/styles.css',
        dest: 'dest/styles.css'
    }
}