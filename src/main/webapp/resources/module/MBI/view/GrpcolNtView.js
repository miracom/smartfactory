Ext.define('MBI.view.GrpcolNtView', {
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
		dataIndex : 'align_type',
		align : 'center',
		text : 'Align Type'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'table_code',
		align : 'center',
		text : 'Table Code'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'col_code',
		align : 'center',
		text : 'Col Code'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'moved_seq_no',
		align : 'center',
		text : 'Moved Seq No'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'hidden_flag',
		align : 'center',
		text : 'Hidden Flag'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'seq_no',
		align : 'center',
		text : 'Seq No'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'spread_level',
		align : 'center',
		text : 'Spread Level'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'group_user_id',
		align : 'center',
		text : 'Group User Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'col_alias',
		align : 'center',
		text : 'Col Alias'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'dsgn_group_col_id',
		align : 'center',
		text : 'Dsgn Group Col Id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'dsgn_id',
		align : 'center',
		text : 'Dsgn id'
	}, {
		xtype : 'gridcolumn',
		autoScroll : true,
		dataIndex : 'col_width',
		align : 'center',
		text : 'Col Width'
	}]

});