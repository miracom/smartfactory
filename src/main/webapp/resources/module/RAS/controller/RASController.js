Ext.define('RAS.controller.RASController', {
	extend: 'Ext.app.Controller',
	
	stores: ['RAS.store.ResourceListStore', 'RAS.store.ResourceStore'],
	models: ['RAS.model.Resource'],
	views: ['RAS.view.resource.Resource'],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	onViewportRendered: function() {
		var nav_op = Ext.create('RAS.view.NavResource', {
			iconCls:'iconsetDockResource',
			tabConfig:{width:29,height:22,padding:'0 0 0 2px'}
		});
		
		SmartFactory.addDockingNav(nav_op);
	}
});