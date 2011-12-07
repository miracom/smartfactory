Ext.define('RPT.view.report.ReportLine', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report_line',

	plugins : [Ext.create('CMN.plugin.Supplement')], 

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
		flex : 1,
		items : [ {
			xtype : 'chart',
			animate : true,
			shadow : true,
			store : 'RPT.store.ReportListStore',
			//store : store,
			legend : {
				position : 'right'
			},
			axes : [ {
				type : 'Numeric',
				position : 'left',
				fields : [ 'plan_qty', 'mat_qty', 'finished_qty' ],
				label : {
					renderer : Ext.util.Format.numberRenderer('0,0'),
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
				position : 'bottom',
				fields : 'oper_id',
				title : 'Operations',
			} ],
			series : [ {
				type : 'line',
				highlight : {
					size : 7,
					radius : 7
				},
				axis : 'left',
				xField : 'oper_id',
				yField : 'plan_qty',
				markerConfig : {
					type : 'circle',
					size : 4,
					radius : 4,
					'stroke-width' : 0
				},
                tips: {
                    trackMouse: true,
                    width: 100,
                    height: 40,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('oper_id') + '<br />' + storeItem.get('plan_qty'));
                    }
                },
				label : {
					display : 'middle',
					field : 'plan_qty' ,
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333',
					'text-anchor' : 'middle'
				},
			}, {
				type : 'line',
				highlight : {
					size : 7,
					radius : 7
				},
				axis : 'left',
				xField : 'oper_id',
				yField : 'mat_qty',
				markerConfig : {
					type : 'circle',
					size : 4,
					radius : 4,
					'stroke-width' : 0
				},
                tips: {
                    trackMouse: true,
                    width: 100,
                    height: 40,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('oper_id') + '<br />' + storeItem.get('mat_qty'));
                    }
                },
				label : {
					display : 'middle',
					field : 'mat_qty' ,
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333',
					'text-anchor' : 'middle'
				},
			}, {
				type : 'line',
				highlight : {
					size : 7,
					radius : 7
				},
				axis : 'left',
				xField : 'oper_id',
				yField : 'finished_qty',
				markerConfig : {
					type : 'circle',
					size : 4,
					radius : 4,
					'stroke-width' : 0
				},
                tips: {
                    trackMouse: true,
                    width: 100,
                    height: 40,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('oper_id') + '<br />' + storeItem.get('finished_qty'));
                    }
                },
				label : {
					display : 'middle',
					field : 'finished_qty' ,
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333',
					'text-anchor' : 'middle'
				},
			} ],
		} ]
	}, {
		xtype : 'container',
		layout : 'fit',
		flex : 1,
		items : [ {
			xtype : 'gridpanel',
			store : 'RPT.store.ReportListStore',
			columnLines : true,
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
	} ],
});
