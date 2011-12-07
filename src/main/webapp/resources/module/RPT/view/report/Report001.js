Ext.define('RPT.view.report.Report001', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report',

	plugins : [Ext.create('CMN.plugin.Supplement')], 

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	defaults : {
		margin : 1,
	},

	store : Ext.create('RPT.store.Report001Store'),

	items : [ {
		xtype : 'container',
		height : 30,
		layout : {
			align : 'stretch',
			pack : 'end',
			type : 'vbox'
		},
		items : [ {
			xtype : 'container',
			height : 20,
			layout : {
				align : 'stretch',
				pack : 'center',
				type : 'hbox'
			},
			width : 400,
			items : [ {
				xtype : 'label',
				text : 'Manufacturing Production Report'
			} ]
		} ]
	}, {
		xtype : 'rpt.report_search_form'
	}, {
		xtype : 'rpt.report_toolbar'
	}, {
		xtype : 'container',
		layout : 'fit',
		flex : 1,
		items : [ Ext.create('RPT.view.report.Report001.Chart', {
			store : this.store
		}), Ext.create('RPT.view.report.Report001.Data', {
			flex : 1
		}) ]
	} ]

});
