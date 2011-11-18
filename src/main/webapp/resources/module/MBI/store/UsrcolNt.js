Ext.define('MBI.store.UsrcolNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'spread_id',
		type : 'number'
	}, {
		name : 'align_type',
		type : 'number'
	}, {
		name : 'table_code',
		type : 'string'
	}, {
		name : 'col_code',
		type : 'string'
	}, {
		name : 'moved_seq_no',
		type : 'number'
	}, {
		name : 'dsgn_user_col_id',
		type : 'number'
	}, {
		name : 'hidden_flag',
		type : 'string'
	}, {
		name : 'grp_usr_id',
		type : 'number'
	}, {
		name : 'seq_no',
		type : 'number'
	}, {
		name : 'spread_level',
		type : 'number'
	}, {
		name : 'col_alias',
		type : 'string'
	}, {
		name : 'dsgn_id',
		type : 'number'
	}, {
		name : 'col_width',
		type : 'number'
	} ]
});