function initLocalization(text) {
	function getLocale() {
		if (navigator) {
			if (navigator.language) {
				return navigator.language;
			} else if (navigator.browserLanguage) {
				return navigator.browserLanguage;
			} else if (navigator.systemLanguage) {
				return navigator.systemLanguage;
			} else if (navigator.userLanguage) {
				return navigator.userLanguage;
			}
		}
	}

	function merge(source, key, value) {
		if (typeof key === 'string') {
			if (value && value.constructor === Object) {
				if (source[key] && source[key].constructor === Object) {
					arguments.callee(source[key], value);
				} else {
					source[key] = value;
					console.log(key);
				}
			} else {
				source[key] = value;
				console.log(key);
			}

			return source;
		}

		var i = 1, ln = arguments.length, object, property;

		for (; i < ln; i++) {
			object = arguments[i];

			for (property in object) {
				if (object.hasOwnProperty(property)) {
					arguments.callee(source, property, object[property]);
				}
			}
		}

		return source;
	}

	text.zz_locale_zz = text.zz_locale_zz || {};

	text.T = function(t) {
		if (t && t.constructor === Object) {
			return merge(text.zz_locale_zz, t);
		} else {
			var attrs = t.split('.');
			var attr = text.zz_locale_zz;
			for ( var i = 0; i < attrs.length; i++) {
				attr = attr[attrs[i]];
				if (attr === undefined)
					return '[' + t + ']';
			}
			return attr;
		}
	};
}