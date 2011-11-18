Ext.define('MBI.store.FormList', {
	extend: 'Ext.data.Store',
	
	model : 'MBI.model.SecfundefNt',
	
	autoLoad: true,
	
	proxy: {
		type: 'ajax',
		url : 'module/MBI/data/secfundef_nt.json',
		extraParams : {
			fac_id : 83,
			func_group : 'TEST',
			func_code : 'TESTJSFORM1G',
			func_type : 'G'
		},
		reader: {
			type: 'json'
		}
	}
});

