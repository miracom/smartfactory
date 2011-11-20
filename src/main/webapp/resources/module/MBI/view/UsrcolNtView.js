Ext.define('MBI.view.UsrcolNtView', {
	extend: 'Ext.grid.Panel',
	
	columns : [
{
		dataIndex : 'spread_id',
		align : 'center',
		text : 'spread_id'
	}, {
		dataIndex : 'align_type',
		align : 'center',
		text : 'align_type'
	}, {
		dataIndex : 'table_code',
		align:'center',
		text : 'table_code'
	}, {
		dataIndex : 'col_code',
		align:'center',
		text : 'col_code'
	}, {
		dataIndex : 'moved_seq_no',
		align : 'center',
		text : 'moved_seq_no'
	}, {
		dataIndex : 'dsgn_user_col_id',
		align : 'center',
		text : 'dsgn_user_col_id'
	}, {
		dataIndex : 'hidden_flag',
		align:'center',
		text : 'hidden_flag'
	}, {
		dataIndex : 'grp_usr_id',
		align : 'center',
		text : 'grp_usr_id'
	}, {
		dataIndex : 'seq_no',
		align : 'center',
		text : 'seq_no'
	}, {
		dataIndex : 'spread_level',
		align : 'center',
		text : 'spread_level'
	}, {
		dataIndex : 'col_alias',
		align:'center',
		text : 'col_alias'
	}, {
		dataIndex : 'dsgn_id',
		align : 'center',
		text : 'dsgn_id'
	}, {
		dataIndex : 'col_width',
		align : 'center',
		text : 'col_width'
	}
	]

});