Ext.define('RPT.view.report.ReportModal', {
	extend : 'Ext.window.Window',

	closable : true,
	width : 600,
	height : 350,
	layout : 'fit',
	felx : 1,
	bodyStyle : 'padding: 5px',
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
		} ]
	} ]
});
