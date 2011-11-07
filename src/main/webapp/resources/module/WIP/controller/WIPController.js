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
		var nav_op = Ext.create('WIP.view.NavOperation', {
			iconCls:'iconsetDockOperation',
			tabConfig:{width:29,height:22,padding:'0 0 0 2px'}
		});
		
		SmartFactory.addDockingNav(nav_op);
	}
});