Ext.define('WIP.store.OperationStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'wip.operation_store',
	
	autoLoad: false,
	
	model: 'WIP.model.Operation',

	proxy: {
		type: 'ajax',
		url : 'module/WIP/data/operations.json',
		reader: {
			type: 'json'
		}
	}
});