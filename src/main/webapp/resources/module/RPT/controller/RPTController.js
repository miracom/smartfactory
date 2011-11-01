Ext.define('RPT.controller.RPTController', {
	extend : 'Ext.app.Controller',

	stores : [ 'RPT.store.ReportListStore', 'RPT.store.ReportStore' ],
	models : [ 'RPT.model.Report' ],
	views : [ 'RPT.view.report.Report' ],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
		var nav_report = Ext.create('RPT.view.NavReport', {
			iconCls : 'iconsetDockReport',
			tabConfig : {
				width : 38,
				height : 21,
				padding : '0 0 0 4px'
			}
		});

		SmartFactory.addDockingNav(nav_report);
	}

});