Ext.define('NAM.view.NavReport', {
	extend: 'Ext.view.View',
	
	store: 'NAM.store.ReportStore',
	
	listeners: {
		itemclick: function(comp, item) {
			var report = Ext.create('MBI.view.FormDesign', {
				title: item.get('report_desc'),
				closable: true,
				tooltip: item.get('report_id')
			});
			
			SmartFactory.addContentView(report);
		}
	},
	
	itemSelector: '.nam_report_item',
	tpl: 
	'<ul>' +
		'<tpl for=".">' +
			'<li class="nam_report_item">{report_id}-{report_desc}</li>' +
		'</tpl>' +
	'</ul>'
});