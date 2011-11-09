Ext.define('NAM.store.Report001Store', {
	extend: 'Ext.data.Store',
	
	model: 'NAM.model.Report001',
	
	autoLoad: true,

	proxy : {
		type : 'ajax',
		url : 'module/NAM/data/report001.json',
		reader : {
			type : 'json'
		}
	}
});