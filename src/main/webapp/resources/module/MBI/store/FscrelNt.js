Ext.define('MBI.store.FscrelNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'service_id',
		type : 'number'
	}, {
		name : 'spread_id',
		type : 'number'
	}, {
		name : 'member_val_index',
		type : 'string'
	}, {
		name : 'common_flag',
		type : 'string'
	}, {
		name : 'reload_flag',
		type : 'string'
	}, {
		name : 'service_name',
		type : 'string'
	}, {
		name : 'func_id',
		type : 'number'
	}, {
		name : 'module_name',
		type : 'string'
	}, {
		name : 'func_service_id',
		type : 'number'
	}, {
		name : 'fac_id',
		type : 'number'
	} ]
});