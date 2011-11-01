Ext.define('SmartFactory.view.Viewport', {
	extend : 'Ext.container.Viewport',

	layout : 'border',

	defaults : {
		split : false,
		collapsible : false
	},

	items : [ Ext.create('SmartFactory.view.viewport.North', {
		region : 'north',
		height : 72
	}), Ext.create('SmartFactory.view.viewport.West', {
		title : 'Navigation',
		region : 'west',
		collapsible : true,
		width : 200,
		split : true
	}), Ext.create('SmartFactory.view.viewport.East', {
		region : 'east',
		collapsible : true,
		collapsed : true,
		width : 200,
		split : true
	}), Ext.create('SmartFactory.view.viewport.South', {
		region : 'south',
		height : 24
	}), Ext.create('SmartFactory.view.viewport.Center', {
		region : 'center'
	}) ]
});
