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
    	{ name: 'mapconGenNt', type: 'auto' },
    	{ name: 'mapdefS2Nt', type: 'auto' },
    	{ name: 'tabvldNt', type: 'auto' },
    	{ name: 'usrcolNt', type: 'auto' },
    	{ name: 'usrmapNt', type: 'auto' }
	],

	proxy: {
		type: 'ajax',
		url : 'module/MBI/data/get_design.json',
		extraParams : {
			fac_id : 83,
			func_id : 1083,
			spd_id : '',
			lang_flag : 1,
			admin_user : SmartFactory.user(),
			func_template_id : 1,
			grp_user_id : ''
		},
		reader: {
			type: 'json'
		}
	}
});
