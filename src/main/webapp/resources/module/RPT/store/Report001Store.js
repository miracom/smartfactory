Ext.define('RPT.store.Report001Store', {
	extend : 'Ext.data.Store',

	storeId : 'rpt.report001_store',

	autoLoad : false,

	model : 'RPT.model.ReportChart',

	proxy : {
		type : 'ajax',
		url : 'module/RPT/data/report001.json',
		reader : {
			type : 'json',
		}
	}
});
