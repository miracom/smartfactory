Ext.define('CMN.view.viewport.North', {
	extend : 'Ext.panel.Panel',

	cls : 'noBorderPanel',

	id : 'menu_toolbar',

	alias : 'widget.viewport.north',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [ {
		layout : 'hbox',
		items : [ {
			xtype : 'cmn.menu',
			cls : 'appMenu',
			height : 27,
			flex : 1
		}, {
			xtype : 'cmn.system_menu',
			cls : 'appMenu',
			minWidth : 100,
			height : 27
		} ]
	}, {
		xtype : 'cmn.toolbar',
		cls : 'appTool',
		flex : 1
	} ]
});
