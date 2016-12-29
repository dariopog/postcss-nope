var postcss = require('postcss');

// PostCSS plugin that lets you write 'nope' instead of 'none'
module.exports = postcss.plugin('postcss-nope', function () {
    return function (root) {
        // Wlak each declaration
        root.walkDecls(function (decl) {
            // Replace declaration value 'nope' with 'none'
            decl.value === 'nope' && (decl.value = 'none');
        });
    };
});
