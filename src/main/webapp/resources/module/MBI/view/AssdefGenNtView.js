Ext.define('MBI.view.AssdefGenNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,

	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'from_code',
		align : 'center',
		text : 'From Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'from_dsn_id',
		align : 'center',
		text : 'From DSN Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'from_ref_col',
		align : 'center',
		text : 'From Ref. Col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'from_spread_id',
		align : 'center',
		text : 'From Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'from_spread_level',
		align : 'center',
		text : 'From Spread Level'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'spread_level',
		align : 'center',
		text : 'Spread Level'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_code',
		align : 'center',
		text : 'Target Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_col_code',
		align : 'center',
		text : 'Target Col Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_col_id',
		align : 'center',
		text : 'Target Col Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_seq_no',
		align : 'center',
		text : 'Target Seq No'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_table_code',
		align : 'center',
		text : 'Target Table Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'target_table_id',
		align : 'center',
		text : 'Target Table Id'
	}	]

});