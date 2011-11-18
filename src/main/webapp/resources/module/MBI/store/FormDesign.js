Ext.define('MBI.store.FormDesign', {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	
	fields: [
     	{ name: 'fsprelNt', type: 'auto' },
    	{ name: 'ftrfldNt', type: 'auto' },
    	{ name: 'fxtrelNt', type: 'auto' },
    	{ name: 'grpcolNt', type: 'auto' },
    	{ name: 'grpmapNt', type: 'auto' },
    	{ name: 'assdefGenNt', type: 'auto' },
    	{ name: 'chtinfNt', type: 'auto' },
    	{ name: 'consqlGenNt', type: 'auto' },
    	{ name: 'fscrelNt', type: 'auto' },
    	{ name: 'mapConGenNt', type: 'auto' },
    	{ name: 'mapDefS2Nt', type: 'auto' },
    	{ name: 'tabVldNt', type: 'auto' },
    	{ name: 'usrColNt', type: 'auto' },
    	{ name: 'usrMapNt', type: 'auto' }
	],
	
	proxy: {
		type: 'ajax',
		url : 'module/MBI/data/get_design.json',
		extraParams : {
			fac_id : 2,
			func_id : 107,
			spd_id : 1,
			lang_flag : 1,
			admin_user : 'ADMIN',
			func_template_id : 1,
			grp_user_id : 145
		},
		reader: {
			type: 'json'
		}
	}
});