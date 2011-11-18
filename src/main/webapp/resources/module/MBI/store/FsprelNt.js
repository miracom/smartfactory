Ext.define('MBI.store.FsprelNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'spread_id',
		type : 'number'
	}, {
		name : 'sp_id',
		type : 'number'
	}, {
		name : 'common_flag',
		type : 'string'
	}, {
		name : 'sp_name',
		type : 'string'
	}, {
		name : 'func_sp_id',
		type : 'number'
	}, {
		name : 'reload_flag',
		type : 'string'
	}, {
		name : 'func_id',
		type : 'number'
	}, {
		name : 'fac_id',
		type : 'number'
	}, {
		name : 'param_val_index',
		type : 'string'
	} ]
});