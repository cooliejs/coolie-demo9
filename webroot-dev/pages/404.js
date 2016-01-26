define(function (require, exports, module) {
    module.exports = function () {
        document.getElementById('demo').innerHTML = 'page 404 ' + Date.now();
    };
});