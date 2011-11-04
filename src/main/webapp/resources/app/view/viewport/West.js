Ext.define('SmartFactory.view.viewport.West', {
	extend: 'Ext.tab.Panel',
	
	id: 'viewport.west',
	cls: 'dockNavigation',
	
	tabPosition: 'bottom',
	
	items: [
	Ext.create('SmartFactory.view.common.NavMenu', {
		iconCls:'iconsetDockMenu',
		tabConfig:{width:29,height:22,padding:'0 0 0 2px'}
	}),
	Ext.create('SmartFactory.view.common.NavFavorite', {
		iconCls:'iconsetDockFavor',
		tabConfig:{width:29,height:22,padding:'0 0 0 2px'}
	})
	]
});