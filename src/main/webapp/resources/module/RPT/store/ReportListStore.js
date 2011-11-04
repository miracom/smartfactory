Ext.define('RPT.store.ReportListStore', {
	extend : 'Ext.data.Store',

	storeId : 'rpt.report_list_store',

	autoLoad : true,

	model : 'RPT.model.Report',

	proxy : {
		type : 'ajax',
		url : 'module/RPT/data/reports.json',
		reader : {
			type : 'json'
		}
	}
});