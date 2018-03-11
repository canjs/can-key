var canReflect = require("can-reflect");
module.exports= {
    strReplacer: /\{([^\}]+)\}/g,
    deleteAtPath: function(data, path) {
		var parts = path ? path.replace(/\[/g,'.')
			.replace(/]/g,'').split('.') : [];
		var current = data;

		for(var i = 0; i < parts.length - 1; i++) {
			if(current) {
				current = canReflect.getKeyValue( current, parts[i]);
			}
		}

		if(current) {
            canReflect.deleteKeyValue(current, parts[parts.length - 1 ]);
		}
	}
};
