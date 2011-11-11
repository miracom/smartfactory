Ext.define('NAM.controller.NAMController', {
	extend: 'Ext.app.Controller',
	
	models: ['NAM.model.Report', 'NAM.model.Report001'],
	stores: ['NAM.store.ReportStore', 'NAM.store.Report001Store'],
	views: [],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	onViewportRendered: function() {
		var nav_report = Ext.create('NAM.view.NavReport', {
			iconCls:'iconsetDockReport',
			tabConfig:{width:29,height:22,padding:'0 0 0 2px'}
		});
		
		SmartFactory.addDockingNav(nav_report);
	}
});