Ext.define('SmartFactory.view.viewport.North', {
	extend: 'Ext.panel.Panel',
	cls:'noBoardPanel',
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [
	Ext.create('SmartFactory.view.common.Menu', {
		store: Ext.data.StoreManager.lookup('common.MenuStore'),
		height: 27,
		cls:'appMenu'
	}),
	Ext.create('SmartFactory.view.common.Toolbar', {
		flex: 1,
		cls:'appQuickIcon'
	})
	]
});