Ext.require([ 'Ext.ux.exporter.Exporter' ]);

Ext.define('RPT.view.report.ReportDashBoard2', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report_dashboard2',

	plugins : [Ext.create('CMN.plugin.Supplement')], 
	exportable : true,
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
	        			 text : 'DashBoard - Production Status'
	        		 } ]
	        	 } ]
	         },
	         {
	        	 xtype : 'container',
	        	 layout : {
	        		 align : 'stretch',
	        		 pack : 'start',
	        		 type : 'hbox'
	        	 },
	        	 flex : 1,
	        	 items : [ {
	        		 xtype : 'container',
	        		 layout : {
	        			 align : 'stretch',
	        			 pack : 'start',
	        			 type : 'vbox'
	        		 },
	        		 margin : 1,
	        		 flex : 2,
	        		 items : [
	        		          {
	        		        	  xtype : 'gridpanel',
	        		        	  exportTo : 'TestGrid1',
	        		        	  flex : 1,
	        		        	  margin : '0 0 1 0',
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
	        		        	  } ]
	        		          },
	        		          {
	        		        	  xtype : 'gridpanel',
	        		        	  exportTo : 'TestGrid2',
	        		        	  flex : 1,
	        		        	  margin : '0 0 1 0',
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
	        		        	  } ]
	        		          },
	        		          {
	        		        	  xtype : 'gridpanel',
	        		        	  exportTo : 'TestGrid3',
	        		        	  flex : 1,
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
	        		        	  } ]
	        		          }]
	        	 }, {
	        		 xtype : 'container',
	        		 layout : {
	        			 align : 'stretch',
	        			 pack : 'start',
	        			 type : 'vbox'
	        		 },
	        		 margin : 1,
	        		 flex : 1,
	        		 items : [ {
	        			 xtype: 'chart',
	        			 style: 'background:#fff',
	        			 animate: {
	        				 easing: 'elasticIn',
	        				 duration: 1000
	        			 },
	        			 store: 'RPT.store.ReportListStore',
	        			 flex: 1,
	        			 legend : {
	        				 position : 'right'
	        			 },
	        			 axes: [{
	        				 type: 'gauge',
	        				 position: 'gauge',
	        				 minimum: 0,
	        				 maximum: 100,
	        				 steps: 10,
	        				 margin: -10
	        			 }],
	        			 series: [{
	        				 type: 'gauge',
	        				 field: 'plan_qty',
	        				 donut: false,
	        				 colorSet: ['#F49D10', '#ddd'],
	        			 }]
	        		 }, {
	        			 xtype: 'chart',
	        			 style: 'background:#fff',
	        			 animate: true,
	        			 store: 'RPT.store.ReportListStore',
	        			 flex: 1,
	        			 axes: [{
	        				 type: 'gauge',
	        				 position: 'gauge',
	        				 minimum: 0,
	        				 maximum: 100,
	        				 steps: 10,
	        				 margin: 7
	        			 }],
	        			 series: [{
	        				 type: 'gauge',
	        				 field: 'mat_qty',
	        				 donut: 30,
	        				 colorSet: ['#82B525', '#ddd']
	        			 }]
	        		 }, {
	        			 xtype: 'chart',
	        			 style: 'background:#fff',
	        			 animate: {
	        				 easing: 'bounceOut',
	        				 duration: 500
	        			 },
	        			 store: 'RPT.store.ReportListStore',
	        			 flex: 1,
	        			 axes: [{
	        				 type: 'gauge',
	        				 position: 'gauge',
	        				 minimum: 0,
	        				 maximum: 100,
	        				 steps: 10,
	        				 margin: 7
	        			 }],
	        			 series: [{
	        				 type: 'gauge',
	        				 field: 'finished_qty',
	        				 donut: 80,
	        				 colorSet: ['#3AA8CB', '#ddd']
	        			 }]
	        		 }]
	        	 } ]
	         }
	         ,{
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
					//store : ['RPT.store.ReportListStore'],
					//  exportTo name
					//formatter : 'csv',
					//targetExports : ['TestGrid1']
				}]
			}
	         
	         
	         ]
});