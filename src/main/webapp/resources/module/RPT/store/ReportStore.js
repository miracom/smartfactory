Ext.define('RPT.store.ReportStore', {
	extend : 'Ext.data.Store',

	storeId : 'rpt.report_store',

	autoLoad : false,

	model : 'RPT.model.ReportChart',

	proxy : {
		type : 'ajax',
		url : 'module/RPT/data/report.json',
		reader : {
			type : 'json'
		}
	}
});