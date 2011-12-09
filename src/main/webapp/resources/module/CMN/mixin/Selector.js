Ext.define('CMN.mixin.Selector', {
	constructor: function(config) {
		var registry = {};
		
		return {
			selector : {
				show : function(selector, filters) {
					var selectorOptions = SmartFactory.selector.get(selector);
					selectorOptions.filters = filters;
					var selector = Ext.create('CMN.view.common.Selector', {
						selectorOptions : selectorOptions
					});
					selector.show();
					return selector;
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
