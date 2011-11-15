Ext.define('RAS.store.ResourceListStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'ras.resource_list_store',
	
	autoLoad: true,
	
	model: 'RAS.model.Resource',

	proxy: {
		type: 'ajax',
		url : 'module/RAS/data/resources.json',
		extraParams : {
			factory : SmartFactory.factory(),
			user : SmartFactory.user()
		},
		reader: {
			type: 'json'
		}
	}
});