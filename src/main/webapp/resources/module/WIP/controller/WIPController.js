Ext.define('WIP.controller.WIPController', {
	extend: 'Ext.app.Controller',
	
	stores: ['WIP.store.OperationStore'],
	models: ['WIP.model.Operation'],
	views: ['WIP.view.oper.Operation'],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	onViewportRendered: function() {
		SmartFactory.addDockingNav('WIP.view.NavOperation', {
			iconCls:'iconsetDockOperation'
		});
	}
});