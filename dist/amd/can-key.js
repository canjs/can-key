/*can-key@0.3.0#can-key*/
define([
    'require',
    'exports',
    'module',
    './delete/delete',
    './get/get',
    './replace-with/replace-with',
    './set/set',
    './transform/transform',
    './walk/walk'
], function (require, exports, module) {
    var deleteKey = require('./delete/delete'), get = require('./get/get'), replaceWith = require('./replace-with/replace-with'), set = require('./set/set'), transform = require('./transform/transform'), walk = require('./walk/walk');
    module.exports = {
        deleteKey: deleteKey,
        get: get,
        replaceWith: replaceWith,
        set: set,
        transform: transform,
        walk: walk
    };
});