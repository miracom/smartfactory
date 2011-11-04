Ext.define('SmartFactory.view.Viewport', {
	extend : 'Ext.container.Viewport',

	layout : 'border',

	defaults : {
		split : false,
		collapsible : false
	},

	items : [ Ext.create('CMN.view.viewport.North', {
		region : 'north', /* store와 생성 우선순위 때문에 .. 해결전까지는 xtype을 사용하지 못함. 참고. CMNController */
		height : 75
	}), Ext.create('CMN.view.viewport.West', {
		title : 'Navigation',
		region : 'west',
		collapsible : true,
		width : 200,
		split : true
	}), {
		xtype : 'viewport.east',
		region : 'east',
		collapsible : true,
		collapsed : true,
		width : 200,
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
