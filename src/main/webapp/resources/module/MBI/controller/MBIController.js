Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	stores: [],
	models: [],
	views: [],
	
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