Ext.define('MBI.view.ConsqlGenNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,

	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'left_col',
		align : 'center',
		text : 'From Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_dsgn_id',
		align : 'center',
		text : 'From DSN Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_prnt_key_flag',
		align : 'center',
		text : 'From Ref. Col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_seq_no',
		align : 'center',
		text : 'From Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_col',
		align : 'center',
		text : 'From Spread Level'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_dsgn_id',
		align : 'center',
		text : 'Spread Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_prnt_key_flag',
		align : 'center',
		text : 'Spread Level'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_seq_no',
		align : 'center',
		text : 'Target Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'spread_id',
		align : 'center',
		text : 'Target Col Code'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'spread_level',
		align : 'center',
		text : 'Target Col Id'
	}	]

});