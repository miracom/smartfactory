Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	stores: ['MBI.store.SecfundefNt','MBI.store.FormDesign'],
	models: ['MBI.model.SecfundefNt'],
	//views: ['MBI.view.FormDesign'],
	views: ['MBI.view.FormDesign','MBI.view.form.BaseLayoutView'],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	//한글한글
	onViewportRendered: function() {
		
		SmartFactory.addNav('MBI.view.NavFormlist', {
			iconCls:'iconsetDockReport',
			itemId : 'navReport',
			title : 'Report Forms'
		});
	}
});
