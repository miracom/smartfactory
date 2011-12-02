Ext.define('RAS.store.ResourceStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'ras.resource_store',
	
	autoLoad: false,
	
	model: 'RAS.model.Resource',
	
//	baseParams: {
//		resource_id: ''
//	},

	proxy: {
		type: 'ajax',
		url : 'module/RAS/data/resource.json',
		reader: {
			type: 'json'
		}
	}
});