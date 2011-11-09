Ext.define('RPT.view.NavReport', {
	extend: 'Ext.view.View',
	
	store: 'RPT.store.ReportListStore',
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			SmartFactory.addContentView({
				xtype: 'rpt.report.report_line', 
				title: record.get('rpt_id') + ' - ' + record.get('rpt_desc'),
				data: record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'report-list',
	itemSelector: '.report-list-item',
	overItemCls: 'report-list-item-hover',
	tpl:'<tpl for="."><div class="report-list-item">{rpt_id} - {rpt_desc}</div></tpl>'
});
