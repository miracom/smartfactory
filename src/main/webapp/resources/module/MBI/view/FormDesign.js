Ext.define('MBI.view.FormDesign', {
	extend: 'Ext.grid.Panel',
	
	store : Ext.getStore('yyyyy'),
	
	columns : [ {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'sp_name',
		align : 'center',
		text : 'SP Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'sp_id',
		align : 'center',
		text : 'SP ID'
	}]

});