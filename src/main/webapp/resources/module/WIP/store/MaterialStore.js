Ext.define('WIP.store.MaterialStore', {
	extend : 'Ext.data.TreeStore',

	autoLoad : false,

	fields : [ {
		name : 'text',
		type : 'string'
	}, {
		name : 'leaf',
		type : 'boolean'
	}, {
		name : 'id',
		type : 'string'
	}, {
		name : 'version',
		type : 'number'
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