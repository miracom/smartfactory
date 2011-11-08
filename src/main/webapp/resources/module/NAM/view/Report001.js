Ext.define('NAM.view.Report001', {
	extend: 'Ext.container.Container',
	
	layout: {
	    type: 'vbox',
	    align : 'stretch',
	    pack  : 'start'
	},
	
	items: [
	// {
	// 		html: 'SAMPLE REPORT',
	// 		align: 'center',
	// 		height: 40
	// 	},
	Ext.create('NAM.view.report001.Chart', { flex: 1 }),
	Ext.create('NAM.view.report001.Grid', { flex: 1 })
	]
});