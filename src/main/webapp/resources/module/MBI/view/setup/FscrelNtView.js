Ext.define('MBI.view.setup.FscrelNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,
	
	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'service_id',
		align : 'center',
		text : 'Service Id'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'member_val_index',
		align : 'center',
		text : 'Member Val Index'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'common_flag',
		align : 'center',
		text : 'Common Flag'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'reload_flag',
		align : 'center',
		text : 'Reload Flag'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'service_name',
		align : 'center',
		text : 'Service Name'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'module_name',
		align : 'center',
		text : 'Module Name'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'func_service_id',
		align : 'center',
		text : 'Func Service Id'
	},{
		xtype : 'gridcolumn',
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac_Id'
	}]

});