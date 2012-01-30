Ext.define('WIP.store.FactoryCmfItemStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	
	fields : [ {
		name : 'FIELD_NAME',
		type : 'string'
	}, {
		name : 'PROMPT',
		type : 'string'
	}, {
		name : 'OPT',
		type : 'string'
	}, {
		name : 'FORMAT',
		type : 'string'
	}, {
		name : 'TABLE_NAME',
		type : 'string'
	} , {
		name : 'VALUE'
	}],

	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'module/WIP/data/view_factory_cmf_item.json',
		reader : {
			type : 'json'
		}
	}
});