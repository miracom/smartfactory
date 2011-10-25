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
			tabConfig:{width:38,height:21,padding:'0 0 0 4px'}
		});
		
		SmartFactory.addDockingNav(nav_op);
	}
});