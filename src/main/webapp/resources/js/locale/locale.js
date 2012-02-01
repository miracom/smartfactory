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
				}
			} else {
				source[key] = value;
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

	text.T = function(t, params) {
		if (t && t.constructor === Object) {
			return merge(text.zz_locale_zz, t);
		} else {
			var attrs = t.split('.');
			var value = text.zz_locale_zz;
			for ( var i = 0; i < attrs.length; i++) {
				value = value[attrs[i]];
				if (value === undefined)
					return '[' + t + ']';
			}
			
			if(params && params.constructor === Object) {
				for(var key in params) {
					value = value.replace('{'+key+'}', params[key]);
				}
			}

			return value;
		}
	};
}