var utils = require("../utils");
var get = require("../can-get");
var canReflect= require("can-reflect");
/**
 * @function can-get/sub/sub
 * @signature `string.sub(str, data, remove)`
 * @param {String} str   a string with {curly brace} delimited property names
 * @param {Object} data  an object from which to read properties
 * @return {String|null} the supplied string with delimited properties replaced with their values
 *                       if all properties exist on the object, null otherwise
 *
 * If `remove` is true, the properties found in delimiters in `str` are removed from `data`.
 *
 * ```js
 * var string = require("can-get/sub/sub");
 *
 * console.log(string.sub("foo_{bar}", {bar: "baz"}})); // -> "foo_baz"
 * console.log(string.sub("foo_{bar}", {})); // -> null
 * ```
 */
module.exports = function sub(str, data, remove) {
	var obs = [];
	str = str || '';
	obs.push(str.replace(utils.strReplacer, function (whole, inside) {
		// Convert inside to type.
		var ob = get(data, inside);

		if(remove === true) {
			utils.deleteAtPath(data, inside);
		}

		if (ob === undefined || ob === null) {
			obs = null;
			return '';
		}
		// If a container, push into objs (which will return objects found).
		if (!canReflect.isPrimitive(ob) && obs) {
			obs.push(ob);
			return '';
		}
		return '' + ob;
	}));
	return obs === null ? obs : obs.length <= 1 ? obs[0] : obs;
};
