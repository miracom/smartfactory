Ext.define('NAM.store.ReportStore', {
	extend: 'Ext.data.Store',
	
	model: 'NAM.model.Report',
	
	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'module/NAM/data/reports.json',
		reader : {
			type : 'json'
		}
	}
});