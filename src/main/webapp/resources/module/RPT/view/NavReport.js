Ext.define('RPT.view.NavReport', {
	extend: 'Ext.view.View',
	
	store: 'RPT.store.ReportListStore',
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			console.log(record);
			SmartFactory.addContentView({
				xtype: record.get('xtype'),
				title: 'Report-' + record.get('report_id'),
				data: record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'report-list',
	itemSelector: '.report-list-item', //itemselector로 div 지정 
	overItemCls: 'report-list-item-hover',
	tpl:'<tpl for="."><div class="report-list-item">{report_id} - {desc}</div></tpl>'
});