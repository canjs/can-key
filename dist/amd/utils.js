/*can-get@0.1.0#utils*/
define([
    'require',
    'exports',
    'module',
    'can-reflect'
], function (require, exports, module) {
    var canReflect = require('can-reflect');
    var utils = {
        isContainer: function (current) {
            var type = typeof current;
            return current && (type === 'object' || type === 'function');
        },
        strReplacer: /\{([^\}]+)\}/g,
        deleteAtPath: function (data, path) {
            var parts = utils.parts(path);
            var current = data;
            for (var i = 0; i < parts.length - 1; i++) {
                if (current) {
                    current = canReflect.getKeyValue(current, parts[i]);
                }
            }
            if (current) {
                canReflect.deleteKeyValue(current, parts[parts.length - 1]);
            }
        },
        parts: function (name) {
            if (Array.isArray(name)) {
                return name;
            } else {
                return typeof name !== 'undefined' ? (name + '').replace(/\[/g, '.').replace(/]/g, '').split('.') : [];
            }
        },
        walk: function (obj, name, keyCallback) {
            var parts = utils.parts(name);
            var length = parts.length, current, i, container, part;
            if (!length) {
                return;
            }
            current = obj;
            for (i = 0; i < length; i++) {
                container = current;
                part = parts[i];
                current = utils.isContainer(container) && canReflect.getKeyValue(container, part);
                var result = keyCallback({
                    parent: container,
                    key: part,
                    value: current
                }, i);
                if (result !== undefined) {
                    current = result;
                }
            }
        }
    };
    module.exports = utils;
});