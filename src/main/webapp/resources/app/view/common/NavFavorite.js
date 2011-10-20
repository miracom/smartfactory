Ext.define('SmartFactory.view.common.NavFavorite', {
	extend: 'Ext.grid.Panel',
	
	columns: [
	{ header: 'Text', dataIndex: 'text' }
	],
	
	store: 'common.FavoriteStore'
});