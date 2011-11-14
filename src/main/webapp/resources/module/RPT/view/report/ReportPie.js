Ext.define('RPT.view.report.ReportPie', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report_pie',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	defaults : {
		margin : 1,
	},

	items : [ {
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
				text : 'Monitoring - Production Status'
			} ]
		} ]
	}, {
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
						emptyText : 'click the trigger'
					}, {
						xtype : 'triggerfield',
						fieldLabel : 'Product Group',
						emptyText : 'click the trigger'
					}, {
						xtype : 'triggerfield',
						fieldLabel : ' ',
						labelSeparator : '',
						emptyText : 'click the trigger'
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
						emptyText : 'click the trigger'
					}, {
						xtype : 'triggerfield',
						fieldLabel : 'Product Type',
						emptyText : 'click the trigger'
					}, {
						xtype : 'triggerfield',
						fieldLabel : 'Product Code',
						emptyText : 'click the trigger'
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
	}, {
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
	}, {
		xtype : 'container',
		layout : {
			align : 'stretch',
			pack : 'start',
			type : 'hbox'
		},
		flex : 1,
		items : [ {
			xtype : 'container',
			layout : 'fit',
			flex : 1,
			items : [ {
				xtype : 'chart',
				animate : true,
				store : 'RPT.store.ReportListStore',
				shadow : true,
				legend : {
					position : 'right'
				},
				series : [ {
					type : 'pie',
					title : [ '1001', '1002', '1003', '1004', '1005', '1006' ],
					field : 'plan_qty',
					showInLegend : true,
					highlight : {
						segment : {
							margin : 20
						}
					},
					label : {
						display : 'rotate',
						field : 'plan_qty',
						contrast : true,
						font : '15px Arial'
					},
			        tips: {
			            trackMouse: true,
			            width: 140,
			            height: 28,
			            renderer: function(storeItem, item) {
			                var total = 0;
			                storeItem.store.each(function(rec) {
			                    total += rec.get('plan_qty');
			                });
			                this.setTitle(storeItem.get('oper_id') + ' : ' + Math.round(storeItem.get('plan_qty') / total * 100) + '%');
			            }
			        }
				} ]
			} ]
		}, {
			xtype : 'container',
			layout : 'fit',
			flex : 1,
			items : [ {
				xtype : 'chart',
				animate : true,
				store : 'RPT.store.ReportListStore',
				shadow : true,
				legend : {
					position : 'right'
				},
				series : [ {
					type : 'pie',
					title : [ '1001', '1002', '1003', '1004', '1005', '1006' ],
					field : 'mat_qty',
					showInLegend : true,
					highlight : {
						segment : {
							margin : 20
						}
					},
					label : {
						display : 'rotate',
						field : 'mat_qty',
						contrast : true,
						font : '15px Arial'
					},
			        tips: {
			            trackMouse: true,
			            width: 140,
			            height: 28,
			            renderer: function(storeItem, item) {
			                var total = 0;
			                storeItem.store.each(function(rec) {
			                    total += rec.get('mat_qty');
			                });
			                this.setTitle(storeItem.get('oper_id') + ' : ' + Math.round(storeItem.get('mat_qty') / total * 100) + '%');
			            }
			        }
				} ]
			} ]
		}, {
			xtype : 'container',
			layout : 'fit',
			flex : 1,
			items : [ {
				xtype : 'chart',
				animate : true,
				store : 'RPT.store.ReportListStore',
				shadow : true,
				legend : {
					position : 'right'
				},
				series : [ {
					type : 'pie',
					title : [ '1001', '1002', '1003', '1004', '1005', '1006' ],
					field : 'finished_qty',
					showInLegend : true,
					highlight : {
						segment : {
							margin : 20
						}
					},
					label : {
						display : 'rotate',
						field : 'finished_qty',
						contrast : true,
						font : '15px Arial'
					},
			        tips: {
			            trackMouse: true,
			            width: 140,
			            height: 28,
			            renderer: function(storeItem, item) {
			                var total = 0;
			                storeItem.store.each(function(rec) {
			                    total += rec.get('finished_qty');
			                });
			                this.setTitle(storeItem.get('oper_id') + ' : ' + Math.round(storeItem.get('finished_qty') / total * 100) + '%');
			            }
			        }
				} ]
			} ]
		} ]
	}, {
		xtype : 'container',
		layout : 'fit',
		flex : 1,
		items : [ {
			xtype : 'gridpanel',
			store : 'RPT.store.ReportListStore',
			columns : [ {
				xtype : 'gridcolumn',
				autoScroll : true,
				dataIndex : 'area',
				align : 'center',
				text : 'Location'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'lot_id',
				align : 'center',
				text : 'Lot No'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'oper_id',
				align : 'center',
				text : 'Operation'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'oper_desc',
				align : 'center',
				text : 'Desription'
			}, {
				xtype : 'gridcolumn',
				align : 'center',
				text : 'Product',
				columns : [ {
					xtype : 'gridcolumn',
					text : 'Code',
					dataIndex : 'mat_id',
					align : 'center',

				}, {
					xtype : 'gridcolumn',
					text : 'Name',
					dataIndex : 'mat_desc',
					align : 'center',
				}, ]
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'oper_sts',
				align : 'center',
				text : 'Status'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'ord_id',
				align : 'center',
				text : 'Work Order'
			}, {
				xtype : 'numbercolumn',
				dataIndex : 'plan_qty',
				align : 'center',
				text : 'Planned Qty'
			}, {
				xtype : 'numbercolumn',
				dataIndex : 'mat_qty',
				align : 'center',
				text : 'Material Qty'
			}, {
				xtype : 'numbercolumn',
				dataIndex : 'finished_qty',
				align : 'center',
				text : 'Finished Qty'
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'insp_id',
				align : 'center',
				text : 'Inspection'
			} ],
			viewConfig : {

			},
			features : [ {
				ftype : 'grouping'
			} ],
			listeners: {
				itemclick: function(grid, record, item, index, e, opt) {

					var report = null;

					if(record.get('oper_id')) {
						report = Ext.create('RPT.view.report.ReportModal', {
							title: 'Operation' + ' - ' + record.get('oper_id'),
							data: record,
							closable: true
						});
					}
					SmartFactory.addContentView(report);
				}
			}
		} ]
	} ]

});
