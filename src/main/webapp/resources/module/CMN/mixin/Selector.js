Ext.define('CMN.mixin.Selector', {
	constructor: function(config) {
		var registry = {};
		
		return {
			selector : {
				show : function(selector, params) {
					var selectorOptions = SmartFactory.selector.get(selector);
					selectorOptions.params = params;
					Ext.create('CMN.view.common.Selector', {
						selectorOptions : selectorOptions
					}).show();
				},
				register : function(name, selector) {
					registry[name] = selector;
				},
				get : function(name) {
					return registry[name];
				}
			} 
		};
	}
});
