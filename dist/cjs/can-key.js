/*can-key@0.3.0#can-key*/
var deleteKey = require('./delete/delete.js'), get = require('./get/get.js'), replaceWith = require('./replace-with/replace-with.js'), set = require('./set/set.js'), transform = require('./transform/transform.js'), walk = require('./walk/walk.js');
module.exports = {
    deleteKey: deleteKey,
    get: get,
    replaceWith: replaceWith,
    set: set,
    transform: transform,
    walk: walk
};