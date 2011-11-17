Ext.define('MBI.store.Design', {
	extend: 'Ext.data.Model',
	
	autoLoad: false,
	
	fields: [
//     	{ name: 'fsprelNt', type:},
//    	{ name: 'ftrfldNt', type:},
//    	{ name: 'fxtrelNt', type:},
//    	{ name: 'grpcolNt', type:},
//    	{ name: 'grpmapNt', type:},
//    	{ name: 'assdefGenNt', type:},
//    	{ name: 'chtinfNt', type:},
//    	{ name: 'consqlGenNt', type:},
//    	{ name: 'fscrelNt', type:},
//    	{ name: 'mapConGenNt', type:},
//    	{ name: 'mapDefS2Nt', type:},
//    	{ name: 'tabVldNt', type:},
//    	{ name: 'usrColNt', type:},
//    	{ name: 'usrMapNt', type:}
	],
	
	proxy: {
		type: 'ajax',
		url : 'module/RAS/data/resource.json',
		extraParams : {
			factory : SmartFactory.factory(),
			user : SmartFactory.user()
		},
		reader: {
			type: 'json'
		}
	}
});