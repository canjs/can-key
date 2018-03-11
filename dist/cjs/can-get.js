/*can-get@0.0.1#can-get*/
'use strict';
var canReflect = require('can-reflect');
var isContainer = function (current) {
    return /^f|^o/.test(typeof current);
};
function get(obj, name) {
    var parts;
    if (Array.isArray(name)) {
        parts = name;
    } else {
        parts = typeof name !== 'undefined' ? (name + '').replace(/\[/g, '.').replace(/]/g, '').split('.') : [];
    }
    var length = parts.length, current, i, container;
    if (!length) {
        return obj;
    }
    current = obj;
    for (i = 0; i < length && isContainer(current) && current !== null; i++) {
        container = current;
        current = canReflect.getKeyValue(container, parts[i]);
    }
    return current;
}
module.exports = get;