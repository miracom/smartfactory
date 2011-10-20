Ext.define('RAS.store.ResourceStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'ras.resource_store',
	
	autoLoad: true,
	
	model: 'RAS.model.Resource',

  proxy: {
		type: 'ajax',
		url : 'module/RAS/data/resources.json',
		reader: {
			type: 'json'
		}
  }
});