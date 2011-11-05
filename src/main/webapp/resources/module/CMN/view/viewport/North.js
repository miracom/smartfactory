Ext.define('CMN.view.viewport.North', {
	extend : 'Ext.panel.Panel',
	cls : 'noBoardPanel',

	id : 'menu_toolbar',

	alias : 'widget.viewport.north',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [ {
		xtype : 'cmn.menu',
		cls : 'appMenu',
		height : 27
	}, {
		xtype : 'cmn.toolbar',
		cls : 'appQuickIcon',
		flex : 1
	} ]
});
