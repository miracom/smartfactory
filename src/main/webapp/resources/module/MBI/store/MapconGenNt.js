/**
 * @class MBI.store.MapconGenNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner condition items 설정 정보.
 */
Ext.define('MBI.store.MapconGenNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'auto_create_flag',
		type : 'string'
	}, {
		name : 'notnull_flag',
		type : 'string'
	}, {
		name : 'con_position',
		type : 'number'
	}, {
		name : 'con_radio_val',
		type : 'string'
	}, {
		name : 'con_seq',
		type : 'number'
	}, {
		name : 'display_text',
		type : 'string'
	}, {
		name : 'con_gcm_table_code',
		type : 'string'
	}, {
		name : 'con_default_date2',
		type : 'number'
	}, {
		name : 'con_default_date1',
		type : 'number'
	}, {
		name : 'con_gcm_val',
		type : 'string'
	}, {
		name : 'con_gcm_ref_col',
		type : 'string'
	}, {
		name : 'con_ref_col',
		type : 'string'
	}, {
		name : 'con_gcm_col',
		type : 'string'
	}, {
		name : 'con_display_type',
		type : 'string'
	}, {
		name : 'gcm_col_names',
		type : 'string'
	}]
});