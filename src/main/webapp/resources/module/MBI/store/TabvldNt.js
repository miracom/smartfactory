/**
 * @class MBI.store.TabvldNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner tab 설정 정보.
 */
Ext.define('MBI.store.TabvldNt', {
	extend: 'Ext.data.Store',

	fields : [

	{
		name : 'spread_id',
		type : 'number'
	}, {
		name : 'ref_col2',
		type : 'string'
	}, {
		name : 'ref_col1',
		type : 'string'
	}, {
		name : 'tab_valid_id',
		type : 'number'
	}, {
		name : 'valid_seq',
		type : 'number'
	}, {
		name : 'func_id',
		type : 'number'
	}, {
		name : 'ref_val1',
		type : 'string'
	}, {
		name : 'check_col',
		type : 'string'
	}, {
		name : 'ref_val2',
		type : 'string'
	}, {
		name : 'fac_id',
		type : 'number'
	}, {
		name : 'valid_type',
		type : 'string'
	} ]
});