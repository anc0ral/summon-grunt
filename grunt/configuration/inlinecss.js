module.exports = {

    inlinecss: {
        options: {
            styleToAttribute: {
                'cellpadding': 'cellpadding',
                'cellspacing': 'cellspacing'
            },
            removeStyleTags: false,
            applyWidthAttributes: true,
            applyAttributesTableElements: true,
            webResources: {
                images: false
            }
        },
        src: 'email/half.html',
        dest: 'email/done.html'
    }

}