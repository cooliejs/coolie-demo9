define(function (require, exports, module) {
    var onhashchange = function (eve) {
        if (location.hash === '#a') {
            require.async('pages/a.js', function (page) {
                page();
            });
        } else if (location.hash === '#b') {
            require.async('pages/b.js', function (page) {
                page();
            });
        } else {
            require.async('pages/404.js', function (page) {
                page();
            });
        }
    };

    window.onhashchange = onhashchange;
    setTimeout(onhashchange, 0);
});