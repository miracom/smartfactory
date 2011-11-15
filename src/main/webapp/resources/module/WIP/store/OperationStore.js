Ext.define('WIP.store.OperationStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'wip.operation_store',
	
	autoLoad: true,
	
	model: 'WIP.model.Operation',

	proxy: {
		type: 'ajax',
		url : 'module/WIP/data/operations.json',
		extraParams : {
			factory : SmartFactory.factory(),
			user : SmartFactory.user()
		},
		extraParams: {
			factory_id: 'FAB101'
		}, 
		reader: {
			type: 'json'
		}
	}
});