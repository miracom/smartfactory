Ext.define('RPT.view.report.Report001.Data', {
	extend: 'Ext.container.Container',

	layout : 'fit',

	items : [ {
		xtype : 'gridpanel',
		store : this.store,

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
	}]
});
