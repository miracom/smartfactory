/**
 * @class MBI.store.ConsqlGenNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner SQL Select Where문 조건설정 관련 정보.
 */
Ext.define('MBI.store.ConsqlGenNt', {
	extend: 'Ext.data.Store',

	fields: [
	{ name: 'left_col', type: 'string' },
	{ name: 'left_dsgn_id', type: 'string' },
	{ name: 'left_prnt_key_flag', type: 'string' },
	{ name: 'left_seq_no', type: 'number' },
	{ name: 'right_col', type: 'string' },
	{ name: 'right_dsgn_id', type: 'number' },
	{ name: 'right_prnt_key_flag', type: 'string' },
	{ name: 'right_seq_no', type: 'number' },
	{ name: 'spread_id', type: 'number' },
	{ name: 'spread_level', type: 'number' }
	]
});
