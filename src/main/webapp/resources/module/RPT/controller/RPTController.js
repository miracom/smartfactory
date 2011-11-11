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
		var nav_report = Ext.create('RPT.view.NavReport', {
			iconCls : 'iconsetDockReport',
			tabConfig : {
				width : 29,
				height : 22,
				padding : '0 0 0 2px'
			}
		});

		SmartFactory.addDockingNav(nav_report);
	}

});
