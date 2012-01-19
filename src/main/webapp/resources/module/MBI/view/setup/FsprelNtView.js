Ext.define('MBI.view.setup.FsprelNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,
	
	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'sp_id',
		align : 'center',
		text : 'Sp Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'common_flag',
		align : 'center',
		text : 'Common Flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'sp_name',
		align : 'center',
		text : 'Sp Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'func_sp_id',
		align : 'center',
		text : 'Func Sp Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'reload_flag',
		align : 'center',
		text : 'Reload Flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'param_val_index',
		align : 'center',
		text : 'Param Val Index'
	}]

});