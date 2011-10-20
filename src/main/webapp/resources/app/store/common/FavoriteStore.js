Ext.define('SmartFactory.store.common.FavoriteStore', {
	extend: 'Ext.data.Store',
	
	storeId: 'common.favorite_store',
	
	autoLoad: true,
	
	fields: [
	{ name: 'text', type: 'string' }
	],
	
  proxy: {
		type: 'ajax',
		url : 'data/favorites.json',
		reader: {
			type: 'json'
		}
  }
});