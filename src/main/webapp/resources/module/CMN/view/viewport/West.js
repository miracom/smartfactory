Ext.define('CMN.view.viewport.West', {
	extend : 'Ext.tab.Panel',

	id : 'docked_nav',
	
	alias : 'widget.viewport.west',

	tabPosition : 'bottom',

	items : [ Ext.create('CMN.view.common.NavMenu', {
		iconCls : 'iconsetDockMenu',
		tabConfig : {
			width : 38,
			height : 21,
			padding : '0 0 0 4px'
		}
	}), Ext.create('CMN.view.common.NavFavorite', {
		iconCls : 'iconsetDockFavor',
		tabConfig : {
			width : 38,
			height : 21,
			padding : '0 0 0 4px'
		}
	}) ]
});