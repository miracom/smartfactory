Ext.define('CMN.mixin.Selector', {
	constructor: function(config) {
		var registry = {};
		
		return {
			selector : {
				show : function(selector, filters, callback, client) {
					/*
					 * selector, filters, callback, client are mandatory parameters
					 */				
					var selectorOptions = SmartFactory.selector.get(selector); //get selector
					selectorOptions.filters = filters; //where
					selectorOptions.callback = callback; //지정한 callback 함수
					selectorOptions.client = client; //show 함수를 호출한 control

					//selectorOptions 생성자로 view.Selector 호출
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
