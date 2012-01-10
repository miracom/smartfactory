Ext.define('WIP.store.MaterialStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,
	
	groupField: 'MAT_ID',
	
	fields : [ {
		name : 'MAT_ID',
		type : 'string'
	}, {
		name : 'MAT_VER',
		type : 'number'
	}, {
		name : 'MAT_DESC',
		type : 'string'
	}, {
		name : 'DELETE_FLAG',
		type : 'string'
	}, {
		name : 'DEACTIVE_FLAG',
		type : 'string'
	} ],

	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'module/WIP/data/materials.json',
		reader : {
			type : 'json'
		}
	}
});