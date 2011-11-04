Ext.define('CMN.view.viewport.West', {
	extend : 'Ext.tab.Panel',

	id : 'docked_nav',
	cls: 'dockNavigation',

	alias : 'widget.viewport.west',

	tabPosition : 'bottom',

	items : [ Ext.create('CMN.view.common.NavMenu', {
		iconCls : 'iconsetDockMenu',
		tabConfig : {
			width : 29,
			height : 22,
			padding : '0 0 0 2px'
		}
	}), Ext.create('CMN.view.common.NavFavorite', {
		iconCls : 'iconsetDockFavor',
		tabConfig : {
			width : 29,
			height : 22,
			padding : '0 0 0 2px'

		}
	}) ]
});
