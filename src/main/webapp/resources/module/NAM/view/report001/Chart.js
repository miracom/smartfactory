Ext.define('NAM.view.report001.Chart', {
	extend: 'Ext.chart.Chart',
	
	store: 'NAM.store.Report001Store',
	
	animate: true,
	
	legend: {
		position: 'right'
	},
	
	axes: [
		{
			type: 'Numeric',
			position: 'bottom',
			fields: ['data1', 'data2'],
			title: 'Data',
			minimum : 0
		},
		{
			type: 'Category',
			position: 'left',
			fields: 'oper_id',
			title: 'Operation'
		}
	],
	
	series: [
	{
		type: 'bar',
		axis: 'bottom',
		xField: ['oper_id'],
		yField: ['data1', 'data2']
	}
	]
	
});