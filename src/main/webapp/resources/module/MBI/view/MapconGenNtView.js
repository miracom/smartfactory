Ext.define('MBI.view.MapconGenNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('yyyyy'),
	
	columns : [
	{
		xtype : 'gridcolumn',
		dataIndex : 'con_seq',
		align : 'center',
		text : 'seq'
	},	{
		xtype : 'gridcolumn',
		dataIndex : 'con_display_type',
		align : 'center',
		text : 'Field Type'
	},	{
		xtype : 'gridcolumn',
		dataIndex : 'notnull_flag',
		align : 'center',
		text : '필수항목여부'
	},	{
		xtype : 'gridcolumn',
		dataIndex : 'con_position',
		align : 'center',
		text : '입력창 위치'
	},  {
		xtype : 'gridcolumn',
		dataIndex : 'display_text',
		align : 'center',
		text : 'Label name'
	},  {
		xtype : 'gridcolumn',
		dataIndex : 'con_radio_val',
		align : 'center',
		text : 'radio value'
	},  {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_table_code',
		align : 'center',
		text : 'GCM Table'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_col',
		align : 'center',
		text : 'GCM_column'
	},	{
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_val',
		align : 'center',
		text : 'GCM Value'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_ref_col',
		align : 'center',
		text : 'GCM ref_column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_ref_col',
		align : 'center',
		text : 'ref_column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_default_date2',
		align : 'center',
		text : 'Default date to'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_default_date1',
		align : 'center',
		text : 'Default date from'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'auto_create_flag',
		align : 'center',
		text : 'auto_create_flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'gcm_col_names',
		align : 'center',
		text : 'gcm_col_names'
	}
	]

});