var store = Ext.create('Ext.data.JsonStore', {
	fields : [ 'name', 'data1', 'data2', 'data3', 'data4', 'data5' ],
	data : [ {
		'name' : 'metric one',
		'data1' : 10,
		'data2' : 12,
		'data3' : 14,
		'data4' : 8,
		'data5' : 13
	}, {
		'name' : 'metric two',
		'data1' : 7,
		'data2' : 8,
		'data3' : 16,
		'data4' : 10,
		'data5' : 3
	}, {
		'name' : 'metric three',
		'data1' : 5,
		'data2' : 2,
		'data3' : 14,
		'data4' : 12,
		'data5' : 7
	}, {
		'name' : 'metric four',
		'data1' : 2,
		'data2' : 14,
		'data3' : 6,
		'data4' : 1,
		'data5' : 23
	}, {
		'name' : 'metric five',
		'data1' : 27,
		'data2' : 38,
		'data3' : 36,
		'data4' : 13,
		'data5' : 33
	} ]
});

Ext.define('RPT.view.report.Report', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	items : [
			{
				xtype : 'container',
				flex : 1,
				layout : 'fit',
				items : [ {
					xtype : 'chart',
					renderTo : Ext.getBody(),
					width : 500,
					height : 300,
					animate : true,
					store : store,
					axes : [ {
						type : 'Numeric',
						position : 'bottom',
						fields : [ 'data1' ],
						label : {
							renderer : Ext.util.Format.numberRenderer('0,0')
						},
						title : 'Sample Values',
						grid : true,
						minimum : 0
					}, {
						type : 'Category',
						position : 'left',
						fields : [ 'name' ],
						title : 'Sample Metrics'
					} ],
					series : [ {
						type : 'bar',
						axis : 'bottom',
						highlight : true,
						tips : {
							trackMouse : true,
							width : 140,
							height : 28,
							renderer : function(storeItem, item) {
								this.setTitle(storeItem.get('name') + ': '
										+ storeItem.get('data1') + ' views');
							}
						},
						label : {
							display : 'insideEnd',
							field : 'data1',
							renderer : Ext.util.Format.numberRenderer('0'),
							orientation : 'horizontal',
							color : '#333',
							'text-anchor' : 'middle'
						},
						xField : 'name',
						yField : [ 'data1' ]
					} ]
				} ]
			}, {
				xtype : 'container',
				flex : 1,
				items : [ {
					xtype : 'checkboxfield',
					fieldLabel : 'Label',
					boxLabel : 'Box Label'
				}, {
					xtype : 'radiofield',
					fieldLabel : 'Label',
					boxLabel : 'Box Label'
				}, {
					xtype : 'gridpanel',
					title : 'My Grid Panel',
					store : store,
					columns : [ {
						xtype : 'gridcolumn',
						dataIndex : 'name',
						text : 'String'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data1',
						text : 'Number'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data2',
						text : 'Number'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data3',
						text : 'Number'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data4',
						text : 'Number'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data5',
						text : 'Number'
					} ],
					viewConfig : {

					},
					features : [ {
						ftype : 'grouping'
					} ]
				} ]
			} ]

});
