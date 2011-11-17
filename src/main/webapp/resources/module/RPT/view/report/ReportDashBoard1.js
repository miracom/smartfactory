Ext.define('RPT.view.report.ReportDashBoard1', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report.report_dashboard1',

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
	        					 this.setTitle(storeItem.get('oper_id') + ' : '
	        							 + 'This is a tip');
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
	        	 layout : {
	        		 align : 'stretch',
	        		 pack : 'start',
	        		 type : 'hbox'
	        	 },
	        	 flex : 2,
	        	 items : [ {
	        		 xtype : 'container',
	        		 layout : 'fit',
	        		 margin : 1,
	        		 flex : 2,
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
	        	 }, {
	        		 xtype : 'container',
	        		 layout : {
	        			 align : 'stretch',
	        			 type : 'vbox'
	        		 },
	        		 margin : 1,
	        		 flex : 1,
	        		 items : [ {
	        			 xtype : 'container',
	        			 layout : 'fit',
	        			 height : 75,
	        			 items : [ {
	        				 xtype : 'fieldset',
	        				 layout : {
	        					 align : 'stretch',
	        					 pack : 'center',
	        					 type : 'vbox'
	        				 },
	        				 flex : 1,
	        				 items : [ {
	        					 xtype : 'textfield',
	        					 fieldLabel : 'Lot No',
	        					 emptyText : 'show "Lot ID" when click the grid'
	        				 }, {
	        					 xtype : 'textfield',
	        					 fieldLabel : 'Operation',
	        					 emptyText : 'show "Operation" when click the grid'
	        				 } ]
	        			 } ]
	        		 }, {
	        			 xtype : 'container',
	        			 layout : 'fit',
	        			 flex : 1,
	        			 items : {
	        				 xtype : 'chart',
	        				 style : 'background:#fff',
	        				 theme : 'Category2',
	        				 animate : true,
	        				 store : 'RPT.store.ReportListStore',
	        				 legend : {
	        					 position : 'right'
	        				 },
	        				 axes : [ {
	        					 type : 'Radial',
	        					 position : 'radial',
	        					 label : {
	        						 display : true
	        					 }
	        				 } ],
	        				 series : [ {
	        					 type : 'radar',
	        					 xField : 'oper_id',
	        					 yField : 'plan_qty',
	        					 showInLegend : true,
	        					 showMarkers : true,
	        					 markerConfig : {
	        						 radius : 5,
	        						 size : 5
	        					 },
	        					 style : {
	        						 'stroke-width' : 2,
	        						 fill : 'none'
	        					 }
	        				 }, {
	        					 type : 'radar',
	        					 xField : 'oper_id',
	        					 yField : 'mat_qty',
	        					 showInLegend : true,
	        					 showMarkers : true,
	        					 markerConfig : {
	        						 radius : 5,
	        						 size : 5
	        					 },
	        					 style : {
	        						 'stroke-width' : 2,
	        						 fill : 'none'
	        					 }
	        				 }, {
	        					 type : 'radar',
	        					 xField : 'oper_id',
	        					 yField : 'finished_qty',
	        					 showMarkers : true,
	        					 showInLegend : true,
	        					 markerConfig : {
	        						 radius : 5,
	        						 size : 5
	        					 },
	        					 style : {
	        						 'stroke-width' : 2,
	        						 fill : '#ddd',
	        						 opacity : 0.7
	        					 }
	        				 } ]
	        			 }
	        		 } ]
	        	 } ]
	         } ]
});