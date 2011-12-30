Ext.define('CMN.view.viewport.North', {
	extend : 'Ext.Container',

	cls : 'noBorderPanel',

	alias : 'widget.viewport.north',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [ {
		layout : 'hbox',
		defaults : {
			cls : 'appMenu'
		},
		items : [ {
			xtype : 'cmn.mainmenu',
			height : 27,
			flex : 1
		}, {
			xtype : 'cmn.sidemenu',
			minWidth : 100,
			height : 27
		} ]
	}, {
		xtype : 'cmn.apptool',
		cls : 'appTool',
		flex : 1
	} ]
});
