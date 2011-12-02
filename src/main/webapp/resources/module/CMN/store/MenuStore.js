Ext.define('CMN.store.MenuStore', {
	extend : 'Ext.data.TreeStore',

	storeId : 'cmn.menu_store',
	
	autoLoad : false,
	
	model : 'CMN.model.Menu',

	root : {
		text : 'Menu',
		expanded : true
	},

	proxy : {
		type : 'ajax',
		url : 'module/CMN/data/menus.json',
		reader : {
			type : 'json'
		}
	}
});
