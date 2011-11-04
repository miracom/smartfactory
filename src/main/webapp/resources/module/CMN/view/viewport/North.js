Ext.define('CMN.view.viewport.North', {
	extend : 'Ext.panel.Panel',
	cls:'noBoardPanel',
	alias : 'widget.viewport.north',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [ Ext.create('CMN.view.common.Menu', {
		store : Ext.data.StoreManager.lookup('CMN.store.MenuStore'),
		cls:'appMenu',
		height : 27
	}), Ext.create('CMN.view.common.Toolbar', {
		cls:'appQuickIcon',
		flex : 1
	}) ]
});