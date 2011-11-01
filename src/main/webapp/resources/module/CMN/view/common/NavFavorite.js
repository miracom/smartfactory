Ext.define('CMN.view.common.NavFavorite', {
	extend: 'Ext.grid.Panel',
	
	columns: [
	{ header: 'Text', dataIndex: 'text' }
	],
	
	store: 'CMN.store.FavoriteStore'
});