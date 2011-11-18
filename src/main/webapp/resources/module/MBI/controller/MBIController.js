Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	stores: ['MBI.store.SecfundefNt','MBI.store.FormDesign'],
	models: ['MBI.model.SecfundefNt'],
	views: ['MBI.view.FormDesign'],
	
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