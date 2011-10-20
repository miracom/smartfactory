Ext.define('SmartFactory.view.viewport.West', {
	extend: 'Ext.tab.Panel',
	
	id: 'viewport.west',
	
	tabPosition: 'bottom',
	
	items: [
	Ext.create('SmartFactory.view.common.NavMenu', {
		iconCls:'iconsetDockMenu',
		tabConfig:{width:38,height:21,padding:'0 0 0 4px'}
	}),
	Ext.create('SmartFactory.view.common.NavFavorite', {
		iconCls:'iconsetDockFavor',
		tabConfig:{width:38,height:21,padding:'0 0 0 4px'}
	})
	]
});