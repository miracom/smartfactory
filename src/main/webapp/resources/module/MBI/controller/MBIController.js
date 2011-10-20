Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	// stores: ['MBI.store.YieldStore'],
	models: ['MBI.model.Yield'],
	views: ['MBI.view.production.Yield'],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	onViewportRendered: function() {
	}
});