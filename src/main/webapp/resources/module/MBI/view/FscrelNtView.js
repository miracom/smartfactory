Ext.define('MBI.view.FscrelNtView', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('test'),
	
	columns : [ {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'service_id',
		align : 'center',
		text : 'Service Id'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'member_val_index',
		align : 'center',
		text : 'Member Val Index'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'common_flag',
		align : 'center',
		text : 'Common Flag'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'reload_flag',
		align : 'center',
		text : 'Reload Flag'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'service_name',
		align : 'center',
		text : 'Service Name'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_id',
		align : 'center',
		text : 'Func Id'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'module_name',
		align : 'center',
		text : 'Module Name'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'func_service_id',
		align : 'center',
		text : 'Func Service Id'
	},{
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'fac_id',
		align : 'center',
		text : 'Fac_Id'
	}]

});