Ext.define('MBI.view.setup.GrpcolNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,
	
	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'align_type',
		align : 'center',
		text : 'Align Type'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'table_code',
		align : 'center',
		text : 'Table Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'col_code',
		align : 'center',
		text : 'Col Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'moved_seq_no',
		align : 'center',
		text : 'Moved Seq No'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'hidden_flag',
		align : 'center',
		text : 'Hidden Flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'seq_no',
		align : 'center',
		text : 'Seq No'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'spread_level',
		align : 'center',
		text : 'Spread Level'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'group_user_id',
		align : 'center',
		text : 'Group User Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'col_alias',
		align : 'center',
		text : 'Col Alias'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'dsgn_group_col_id',
		align : 'center',
		text : 'Dsgn Group Col Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'dsgn_id',
		align : 'center',
		text : 'Dsgn id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'col_width',
		align : 'center',
		text : 'Col Width'
	}]

});