define(function (require, exports, module) {
    module.exports = function () {
        document.getElementById('demo').innerHTML = 'page a ' + Date.now();
    };
});