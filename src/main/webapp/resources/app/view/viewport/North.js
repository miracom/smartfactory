Ext.define('SmartFactory.view.viewport.North', {
	extend: 'Ext.panel.Panel',

	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [
	Ext.create('SmartFactory.view.common.Menu', {
		height: 25
	}),
	Ext.create('SmartFactory.view.common.Toolbar', {
		flex: 1
	})
	]
});