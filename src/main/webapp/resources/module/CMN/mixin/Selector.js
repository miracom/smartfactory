Ext.define('CMN.mixin.Selector', {
	constructor: function(config) {
		var registry = {};
		
		return {
			selector : {
				show : function(selector, filters, callback, client) {
					/*
					 * selector, filters, callback, client are mandatory parameters
					 */
					var selectorOptions = SmartFactory.selector.get(selector);
					selectorOptions.filters = filters;
					selectorOptions.callback = callback;
					selectorOptions.client = client;

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
