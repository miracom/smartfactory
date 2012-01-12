Ext.define('MBI.view.setup.ConsqlGenNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,

	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'left_col',
		align : 'center',
		text : 'Left column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_dsgn_id',
		align : 'center',
		text : 'Left DSN Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_prnt_key_flag',
		align : 'center',
		text : 'Left key flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'left_seq_no',
		align : 'center',
		text : 'Left Seq no'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_col',
		align : 'center',
		text : 'Right column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_dsgn_id',
		align : 'center',
		text : 'Right DSN Id'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_prnt_key_flag',
		align : 'center',
		text : 'Right key flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'right_seq_no',
		align : 'center',
		text : 'Right Seq no'
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
	}	]

});