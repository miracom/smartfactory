/**
 * @class MBI.store.AssdefGenNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner Assign define 설정 정보.
 */
Ext.define('MBI.store.AssdefGenNt', {
	extend: 'Ext.data.Store',
	
	fields: [
	{ name: 'from_code', type: 'string' },
	{ name: 'from_dsn_id', type: 'string' },
	{ name: 'from_ref_col', type: 'number' },
	{ name: 'from_spread_id', type: 'number' },
	{ name: 'from_spread_level', type: 'number' },
	{ name: 'spread_id', type: 'number' },
	{ name: 'spread_level', type: 'number' },
	{ name: 'target_code', type: 'string' },
	{ name: 'target_col_code', type: 'string' },
	{ name: 'target_col_id', type: 'number' },
	{ name: 'target_seq_no', type: 'number' },
	{ name: 'target_table_code', type: 'string' },
	{ name: 'target_table_id', type: 'number' }
	]
});
