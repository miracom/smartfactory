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
		SmartFactory.addDockingNav('NAM.view.NavReport', {
			iconCls:'iconsetDockReport'
		});
	}
});