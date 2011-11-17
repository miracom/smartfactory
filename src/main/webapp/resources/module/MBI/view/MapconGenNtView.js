Ext.define('MBI.view.MapconGenNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('yyyyy'),
	
	columns : [
	{
		xtype : 'gridcolumn',
		dataIndex : 'auto_create_flag',
		align : 'center',
		text : 'auto_create_flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'notnull_flag',
		align : 'center',
		text : 'notnull_flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_position',
		align : 'center',
		text : 'con_position'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_radio_val',
		align : 'center',
		text : 'xxd'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_seq',
		align : 'center',
		text : 'con_radio_val'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'display_text',
		align : 'center',
		text : 'display_text'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_table_code',
		align : 'center',
		text : 'con_gcm_table_code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_default_date2',
		align : 'center',
		text : 'con_default_date2'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_default_date1',
		align : 'center',
		text : 'con_default_date1'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_val',
		align : 'center',
		text : 'con_gcm_val'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_ref_col',
		align : 'center',
		text : 'con_gcm_ref_col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_ref_col',
		align : 'center',
		text : 'con_ref_col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_gcm_col',
		align : 'center',
		text : 'con_gcm_col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'con_display_align',
		align : 'center',
		text : 'con_display_align'
	}
	]

});