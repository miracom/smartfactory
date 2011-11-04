var store = Ext.create('Ext.data.JsonStore', {
	fields : [ 'name', 'data1', 'data2', 'data3', 'data4', 'data5' ],
	data : [ {
		'name' : 'Operation1',
		'data1' : 10,
		'data2' : 12,
		'data3' : 14,
		'data4' : 8,
		'data5' : 13
	}, {
		'name' : 'Operation2',
		'data1' : 7,
		'data2' : 8,
		'data3' : 16,
		'data4' : 10,
		'data5' : 3
	}, {
		'name' : 'Operation3',
		'data1' : 5,
		'data2' : 2,
		'data3' : 14,
		'data4' : 12,
		'data5' : 7
	}, {
		'name' : 'Operation4',
		'data1' : 2,
		'data2' : 14,
		'data3' : 6,
		'data4' : 1,
		'data5' : 23
	}, {
		'name' : 'Operation5',
		'data1' : 27,
		'data2' : 38,
		'data3' : 36,
		'data4' : 13,
		'data5' : 33
	} ]
});

Ext.define('Ext.ux.CustomTrigger', {
	extend : 'Ext.form.field.Trigger',
	alias : 'widget.customtrigger',

	onTriggerClick : function() {
		Ext.Msg.alert('Status', 'You clicked trigger!');
	}
});

Ext.define('RPT.view.report.Report', {
	extend : 'Ext.form.Panel',
	
	alias : 'widget.rpt.report.report',
	
	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	defaults : {
		margin : 1,
	},

	items : [
			{
				xtype : 'container',
				height : 30,
				layout : {
					align : 'stretch',
					pack : 'end',
					type : 'vbox'
				},
				items : [ {
					xtype : 'container',
					height : 20,
					layout : {
						align : 'stretch',
						pack : 'center',
						type : 'hbox'
					},
					width : 400,
					items : [ {
						xtype : 'label',
						text : 'Manufacturing Production Report'
					} ]
				} ]
			},
			{
				xtype : 'container',
				layout : 'fit',
				height : 100,
				items : [ {
					xtype : 'fieldset',
					layout : {
						align : 'stretch',
						type : 'hbox'
					},
					flex : 1,
					items : [ {
						xtype : 'container',
						layout : {
							align : 'stretch',
							pack : 'center',
							type : 'vbox'
						},
						flex : 1,
						items : [ {
							xtype : 'container',
							layout : 'anchor',
							anchor : '90%',
							items : [ {
								xtype : 'triggerfield',
								fieldLabel : 'Factory',
								emptyText : 'click the trigger',
							}, {
								xtype : 'triggerfield',
								fieldLabel : 'Product Group',
								emptyText : 'click the trigger',
							}, {
								xtype : 'triggerfield',
								fieldLabel : ' ',
								labelSeparator : '',
								emptyText : 'click the trigger',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : {
							align : 'stretch',
							pack : 'center',
							type : 'vbox'
						},
						flex : 1,
						items : [ {
							xtype : 'container',
							layout : 'anchor',
							anchor : '90%',
							items : [ {
								xtype : 'triggerfield',
								fieldLabel : 'Operation Code',
								emptyText : 'click the trigger',
							}, {
								xtype : 'triggerfield',
								fieldLabel : 'Product Type',
								emptyText : 'click the trigger',
							}, {
								xtype : 'triggerfield',
								fieldLabel : 'Product Code',
								emptyText : 'click the trigger',
							} ]
						} ]
					}, {
						xtype : 'container',
						layout : {
							align : 'middle',
							pack : 'end',
							type : 'hbox'
						},
						flex : 1,
						items : [ {
							xtype : 'button',
							margin : '5,0,0,0',
							width : 70,
							text : 'Search',
						}, {
							xtype : 'button',
							width : 70,
							text : 'Excel',
						}, ]
					} ]
				} ]
			},
			{
				xtype : 'toolbar',
				height : 30,
				layout : {
					pack : 'start',
					type : 'hbox'
				},
				items : [ {
					iconCls : 'icon1_32',
					scale : 'small'
				}, {
					xtype : 'tbspacer',
					width : 3
				}, {
					iconCls : 'icon2_32',
					scale : 'small'
				}, {
					xtype : 'tbspacer',
					width : 3
				}, {
					iconCls : 'icon3_32',
					scale : 'small'
				}, {
					xtype : 'tbspacer',
					width : 3
				}, {
					iconCls : 'icon4_32',
					scale : 'small'
				}, {
					xtype : 'tbspacer',
					width : 3
				}, {
					iconCls : 'icon5_32',
					scale : 'small'
				}, {
					xtype : 'tbfill',
				}, {
					iconCls : 'icon1_32',
					scale : 'small'
				}, {
					xtype : 'tbspacer',
					width : 3
				}, {
					iconCls : 'icon2_32',
					scale : 'small'
				} ]
			},
			{
				xtype : 'container',
				layout : 'fit',
				flex : 1,
				items : [ {
					xtype : 'chart',
					renderTo : Ext.getBody(),
					animate : true,
					width : 500,
					height : 300,
					store : store,
					//store: 'RPT.store.ReportStore',
					legend : {
						position : 'right'
					},
					axes : [
							{
								type : 'Numeric',
								position : 'bottom',
								fields : [ 'data1', 'data2', 'data3', 'data4', 'data5' ],
								label : {
									renderer : Ext.util.Format
											.numberRenderer('0,0')
								},
								title : 'Quantity',
								grid : {
									odd : {
										opacity : 0.5,
										fill : '#ddd',
										stroke : '#bbb',
										'stroke-width' : 1
									}
								},
								minimum : 0
							}, {
								type : 'Category',
								position : 'left',
								fields : [ 'name' ],
								title : 'Operations'
							} ],
					series : [ {
						type : 'bar',
						axis : 'bottom',
						highlight : true,
						tips : {
							trackMouse : true,
							width : 140,
							height : 30,
							renderer : function(storeItem, item) {
								this.setTitle(storeItem.get('name') + ': '
										+ storeItem.get('data1') + ' views');
							}
						},
						label : {
							display : 'insideEnd',
							field : [ 'data1', 'data2', 'data3', 'data4',
									'data5' ],
							renderer : Ext.util.Format.numberRenderer('0'),
							orientation : 'horizontal',
							color : '#333',
							'text-anchor' : 'middle'
						},
						xField : 'name',
						yField : [ 'data1', 'data2' ]
					} ]
				} ]
			}, {
				xtype : 'container',
				layout : 'fit',
				flex : 1,
				items : [ {
					xtype : 'gridpanel',
					store : store,
					//store: 'RPT.store.ReportStore',
					columns : [ {
						xtype : 'gridcolumn',
						autoScroll : true,
						dataIndex : 'name',
						align : 'center',
						text : 'Location'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data1',
						align : 'center',
						text : 'Lot No'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data2',
						align : 'center',
						text : 'Operation'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data3',
						align : 'center',
						text : 'Desription'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data5',
						align : 'center',
						text : 'Product',
						columns : [ {
							text : 'Code',
							renderer : 'usMoney',
							dataIndex : 'data1',
							align : 'center',

						}, {
							text : 'Name',
							renderer : 'usMoney',
							dataIndex : 'data2',
							align : 'center',
						}, ]
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data4',
						align : 'center',
						text : 'Status'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data4',
						align : 'center',
						text : 'Work Order'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data4',
						align : 'center',
						text : 'Qty'
					}, {
						xtype : 'numbercolumn',
						dataIndex : 'data4',
						align : 'center',
						text : 'Inspection'
					}, ],
					viewConfig : {

					},
					features : [ {
						ftype : 'grouping'
					} ]
				} ]
			} ]

});
