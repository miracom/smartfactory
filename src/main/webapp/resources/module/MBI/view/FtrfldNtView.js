Ext.define('MBI.view.FtrfldNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('test'),
	
	columns : [ {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'field_val_index',
		align : 'center',
		text : 'Field Val Index'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'sheet_id',
		align : 'center',
		text : 'Sheet Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_template_id',
		align : 'center',
		text : 'Func Template Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_tmp_field_id',
		align : 'center',
		text : 'Func Tmp Field Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac Id'
	}]

});