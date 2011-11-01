Ext.define('RPT.store.ReportStore', {
	extend : 'Ext.data.Store',

	id : 'rpt.report_store',

	autoLoad : true,

	model : 'RPT.model.ReportChart',

	proxy : {
		type : 'ajax',
		url : 'module/RPT/data/report.json',
		reader : {
			type : 'json'
		}
	}
});