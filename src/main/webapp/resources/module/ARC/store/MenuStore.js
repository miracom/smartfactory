Ext.define('ARC.store.MenuStore', {
	extend : 'Ext.data.Store',

	storeId : 'arc.menu_store',

	autoLoad : false,

	model : 'ARC.model.Menu',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/menu.json',
		reader : {
			type : 'json'
		}
	}
});