Ext.define('MBI.view.FxtrelNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('test'),
	
	columns : [ {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'template_name',
		align : 'center',
		text : 'Template Name'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'report_seq',
		align : 'center',
		text : 'Report Seq'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'report_name',
		align : 'center',
		text : 'Report Name'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'template_id',
		align : 'center',
		text : 'Template Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_template_id',
		align : 'center',
		text : 'Func Template Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'template_filename',
		align : 'center',
		text : 'Template Filename'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac Id'
	}]

});