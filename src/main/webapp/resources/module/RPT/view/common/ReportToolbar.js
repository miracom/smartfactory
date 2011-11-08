Ext.define('RPT.view.common.ReportToolbar', {
	extend : 'Ext.toolbar.Toolbar',
	
	alias : 'widget.rpt.report_toolbar',

	height : 30,

	layout : {
		pack : 'start',
		type : 'hbox'
	},

	items : [ {
		iconCls : 'icon1_32',
		scale : 'small'
	}, {
		xtype : 'tbspacer',
		width : 3
	}, {
		iconCls : 'icon2_32',
		scale : 'small'
	}, {
		xtype : 'tbspacer',
		width : 3
	}, {
		iconCls : 'icon3_32',
		scale : 'small'
	}, {
		xtype : 'tbspacer',
		width : 3
	}, {
		iconCls : 'icon4_32',
		scale : 'small'
	}, {
		xtype : 'tbspacer',
		width : 3
	}, {
		iconCls : 'icon5_32',
		scale : 'small'
	}, {
		xtype : 'tbfill',
	}, {
		iconCls : 'icon1_32',
		scale : 'small'
	}, {
		xtype : 'tbspacer',
		width : 3
	}, {
		iconCls : 'icon2_32',
		scale : 'small'
	} ]

});
