Ext.define('CMN.mixin.Selector', {
	constructor: function(config) {
		return {
			selector : {
				show : function(config) {
					Ext.create('CMN.view.common.Selector', config).show();
				}
			}
		};
	}
});
