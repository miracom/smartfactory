Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	stores: ['MBI.store.FormList','MBI.store.FormDesign'],
	models: ['MBI.model.SecfundefNt'],
	views: [],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	onViewportRendered: function() {
		SmartFactory.addDockingNav('MBI.view.NavFormlist', {
			iconCls:'iconsetDockReport'
		});
	}
});