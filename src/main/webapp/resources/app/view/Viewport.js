Ext.define('SmartFactory.view.Viewport', {
	extend : 'Ext.container.Viewport',

	layout : 'border',

	defaults : {
		split : false,
		collapsible : false
	},

	items : [ {
		xtype : 'viewport.north',
		region : 'north',
		height : 73
	}, {
		xtype : 'viewport.west',
		title : 'Navigation',
		region : 'west',
		collapsible : true,
		width : 200,
		split : true
	}, {
		xtype : 'viewport.east',
		region : 'east',
		collapsible : true,
		width:200,
		split : true
	}, {
		xtype : 'viewport.south',
		region : 'south',
		height : 24
	}, {
		xtype : 'viewport.center',
		region : 'center'
	} ]
});
