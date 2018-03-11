var utils = require("../utils");
var get = require("../can-get");
/**
 * @function can-get/replace-with/replace-with
 * @signature `replaceWith(str, data, replacer, remove)`
 * @param {String} str string with {curly brace} delimited property names
 * @param {Object} data object from which to read properties
 * @param {Function} replacer function which returns string replacements
 * @param {Boolean} shouldRemoveMatchedPaths whether to remove properties found in delimiters in `str` from `data`
 * @return {String} the supplied string with delimited properties replaced with their values
 *
 *
 * ```js
 * var replaceWith = require("can-get/replace-with/replace-with");
 * var answer = replaceWith(
 *   '{.}{.}{.}{.}{.} Batman!',
 *   {},
 *   () => 'Na'
 * );
 * // => 'NaNaNaNaNa Batman!'
 * ```
 */
module.exports = function (str, data, replacer, shouldRemoveMatchedPaths) {
    return str.replace(utils.strReplacer, function (whole, path) {
        var value = get(data, path);
        if(shouldRemoveMatchedPaths) {
            utils.deleteAtPath(data, path);
        }
        return replacer(path, value);
    });
};
