Ext.define('RPT.view.report.Report001.Chart', {
	extend : 'Ext.chart.Chart',
	
	store : this.store,
	
	animate : true,
	
	width : 500,
	
	height : 300, 

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
});