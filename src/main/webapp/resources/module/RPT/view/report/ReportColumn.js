Ext.require([ 'Ext.ux.exporter.Exporter' ]);

var EX_store = Ext.getStore('RPT.store.ReportListStore');

Ext.define('RPT.view.report.ReportColumn', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report_column',

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
			width : 400,
			height : 250,
			store : 'RPT.store.ReportListStore',
			legend : {
				position : 'right'
			},
			axes : [ {
				type : 'Numeric',
				position : 'left',
				fields : [ 'mat_qty', 'plan_qty', 'finished_qty' ],
				label : {
					renderer : Ext.util.Format.numberRenderer('0,0')
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
				title : 'Operations'
			} ],
			series : [ {
				type : 'column',
				axis : 'left',
				highlight : true,
				tips : {
					trackMouse : true,
					width : 200,
					height : 30,
					renderer : function(storeItem, item) {
						this.setTitle(storeItem.get('oper_id') + ' : ' + 'This is a tip');
					}
				},
				label : {
					display : 'insideEnd',
					field : [ 'mat_qty', 'plan_qty', 'finished_qty' ],
					renderer : Ext.util.Format.numberRenderer('0'),
					orientation : 'horizontal',
					color : '#333',
					'text-anchor' : 'middle'
				},
				xField : 'oper_id',
				yField : [ 'mat_qty', 'plan_qty', 'finished_qty' ]
			} ]
		} ]
	}, {
		xtype : 'container',
		layout : 'fit',
		flex : 1,
		items : [ {
			xtype : 'gridpanel',
			store : 'RPT.store.ReportListStore',
			columnLines : true,
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'bottom',
				items : [ {
					xtype : 'tbfill'
				}, {
					xtype : 'exporterbutton'
				} ]
			} ],
			title : 'TestGrid',
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
			listeners : {
				itemclick : function(grid, record, item, index, e, opt) {

					var report = null;

					if (record.get('oper_id')) {
						report = Ext.create('RPT.view.report.ReportModal', {
							title : 'Operation' + ' - ' + record.get('oper_id'),
							data : record,
							closable : true
						});
					}
					SmartFactory.addContentView(report);
				}
			}
		} ]
	}, {
		xtype : 'toolbar',
		height : 30,
		layout : {
			type : 'hbox',
			pack : 'start'
		},
		items : [ {
			xtype : 'tbfill'
		}, {
			xtype : 'exporterbutton',
			store : EX_store
		} ]
	}, ]
});