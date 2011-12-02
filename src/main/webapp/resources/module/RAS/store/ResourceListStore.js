Ext.define('RAS.store.ResourceListStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'ras.resource_list_store',
	
	autoLoad: false,
	
	model: 'RAS.model.Resource',

	proxy: {
		type: 'ajax',
		url : 'module/RAS/data/resources.json',
		reader: {
			type: 'json'
		}
	}
});