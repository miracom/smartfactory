Ext.define('WIP.store.OperationListStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,
	
	fields : [ {
		name : 'oper_id',//OPER
		type : 'string'
	}, {
		name : 'desc',//OPER_DESC
		type : 'string'
	},{
		name : 'type',
		type : 'string'
	}
	
//	, {
//		name : 'NEXT_OPER',
//		type : 'string'
//	}, {
//		name : 'OPT_OPER_GROUP',
//	}, {
//		name : 'OPT_OPER_OPTION_FLAG',
//	} 
	],

	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'module/WIP/data/operations.json',
		reader : {
			type : 'json'
		}
	}
});