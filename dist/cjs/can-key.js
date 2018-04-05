/*can-key@0.2.1#can-key*/
var deleteKey = require('./delete/delete.js'), get = require('./get/get.js'), replaceWith = require('./replace-with/replace-with.js'), transform = require('./transform/transform.js'), walk = require('./walk/walk.js');
module.exports = {
    deleteKey: deleteKey,
    get: get,
    replaceWith: replaceWith,
    transform: transform,
    walk: walk
};