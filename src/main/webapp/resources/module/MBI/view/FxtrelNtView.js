Ext.define('MBI.view.FxtrelNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,
	
	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'template_name',
		align : 'center',
		text : 'Template Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'report_seq',
		align : 'center',
		text : 'Report Seq'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'report_name',
		align : 'center',
		text : 'Report Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'template_id',
		align : 'center',
		text : 'Template Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'func_template_id',
		align : 'center',
		text : 'Func Template Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'template_filename',
		align : 'center',
		text : 'Template Filename'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac Id'
	}]

});