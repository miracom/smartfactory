Ext.define('MBI.view.FsprelNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('test'),
	
	columns : [ {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'sp_id',
		align : 'center',
		text : 'Sp Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'common_flag',
		align : 'center',
		text : 'Common Flag'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'sp_name',
		align : 'center',
		text : 'Sp Name'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_sp_id',
		align : 'center',
		text : 'Func Sp Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'reload_flag',
		align : 'center',
		text : 'Reload Flag'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'param_val_index',
		align : 'center',
		text : 'Param Val Index'
	}]

});