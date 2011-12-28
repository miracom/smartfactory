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
		SmartFactory.addNav('RPT.view.NavReport', {
			iconCls : 'iconsetDockReport',
			itemId : 'navReportSample',
			title : 'report sample'
		});
	}

});
