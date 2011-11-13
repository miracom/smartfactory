Ext.define('RPT.controller.RPTController', {
	extend : 'Ext.app.Controller',

	stores : [ 'RPT.store.ReportListStore', 'RPT.store.ReportStore' ],
	models : [ 'RPT.model.Report' ],
	views : [],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
		SmartFactory.addDockingNav('RPT.view.NavReport', {
			iconCls : 'iconsetDockReport'
		});
	}

});
