Ext.define('RPT.view.NavReport', {
	extend: 'Ext.view.View',
	
	store: 'RPT.store.ReportListStore',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {

			var report = null;
			
			console.log(record);
			
			if(record.get('report_view')) {
				report = Ext.create(record.get('report_view'), {
					title: record.get('rpt_id') + ' - ' + record.get('rpt_desc'),
					data: record,
					closable: true
				});
			}
			SmartFactory.addContentView(report);
		}
	},
	
	autoScroll: true,
	
	cls: 'report-list',
	itemSelector: '.report-list-item',
	overItemCls: 'report-list-item-hover',
	tpl:'<tpl for="."><div class="report-list-item">{rpt_id} - {rpt_desc}</div></tpl>'
});
