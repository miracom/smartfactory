Ext.define('MBI.store.FormDesign', {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	
	fields: [
     	{ name: 'fsprelNt', type: 'auto' }, // SP setting info
    	{ name: 'ftrfldNt', type: 'auto' }, // Excel template field setting info
    	{ name: 'fxtrelNt', type: 'auto' }, // Excel template file setting info
    	{ name: 'grpcolNt', type: 'auto' }, // group column setting info
    	{ name: 'grpmapNt', type: 'auto' }, // group map position setting info
    	{ name: 'assdefGenNt', type: 'auto' }, // assign setting info
    	{ name: 'chtinfNt', type: 'auto' }, // chart setting info
    	{ name: 'consqlGenNt', type: 'auto' }, // condition sql info
    	{ name: 'fscrelNt', type: 'auto' }, // H101 service setting info
    	{ name: 'mapconGenNt', type: 'auto' }, // condition info
    	{ name: 'mapdefS2Nt', type: 'auto' }, // column setting info
    	{ name: 'tabvldNt', type: 'auto' }, //  tab validation info
    	{ name: 'usrcolNt', type: 'auto' }, //  user column setting info
    	{ name: 'usrmapNt', type: 'auto' }  //  user map position setting info
	],

	proxy: {
		type: 'ajax',
		url : 'module/MBI/data/get_design.json',
		extraParams : {
			func_id : 107,
			spd_id : '',
			func_template_id : 1
		},
		reader: {
			type: 'json'
		}
	}
});
