Ext.define('SmartFactory.store.common.MenuStore', {
	extend: 'Ext.data.TreeStore',
	
	storeId: 'common.menu_store',
	
	autoLoad: true,
	
  root: {
		text: 'Menu',
		expanded: true
	},
	
  proxy: {
		type: 'ajax',
		url : 'data/menus.json',
		reader: {
			type: 'json'
		}
  }
});
