Ext.define('CMN.store.FavoriteStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'cmn.favorite_store',
	
	autoLoad: true,
	
	fields: [
	{ name: 'text', type: 'string' }
	],
	
  proxy: {
		type: 'ajax',
		url : 'module/CMN/data/favorites.json',
		reader: {
			type: 'json'
		}
  }
});