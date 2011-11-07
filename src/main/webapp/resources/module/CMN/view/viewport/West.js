Ext.define('CMN.view.viewport.West', {
	extend : 'Ext.tab.Panel',

	alias : 'widget.viewport.west',

	id : 'docked_nav',

	cls : 'dockNavigation',

	tabPosition : 'bottom',

	items : [ {
		xtype : 'cmn.nav_menu',
		iconCls : 'iconsetDockMenu',
		tabConfig : {
			width : 29,
			height : 22,
			padding : '0 0 0 2px'
		}
	}, {
		xtype : 'cmn.nav_favorite',
		iconCls : 'iconsetDockFavor',
		tabConfig : {
			width : 29,
			height : 22,
			padding : '0 0 0 2px'

		}
	} ]
});
