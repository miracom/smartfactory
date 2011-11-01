Ext.define('CMN.view.viewport.North', {
	extend : 'Ext.panel.Panel',
	
	alias : 'widget.viewport.north',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [ Ext.create('CMN.view.common.Menu', {
		store : Ext.data.StoreManager.lookup('CMN.store.MenuStore'),
		height : 28
	}), Ext.create('CMN.view.common.Toolbar', {
		flex : 1
	}) ]
});