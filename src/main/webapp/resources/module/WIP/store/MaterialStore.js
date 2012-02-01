Ext.define('WIP.store.MaterialStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,
	
	fields : [ {
		name : 'MAT_ID',
		type : 'string'
	}, {
		name : 'MAT_VER',
		type : 'number'
	}, {
		name : 'MAT_DESC',
		type : 'string'
	}, {
		name : 'DELETE_FLAG',
		type : 'string'
	}, {
		name : 'DEACTIVE_FLAG',
		type : 'string'
	}, {
		name : 'MAT_GRP_1'
	}, {
		name : 'MAT_GRP_2'
	}, {
		name : 'MAT_GRP_3'
	}, {
		name : 'MAT_GRP_4'
	}, {
		name : 'MAT_GRP_5'
	}, {
		name : 'MAT_GRP_6'
	}, {
		name : 'MAT_GRP_7'
	}, {
		name : 'MAT_GRP_8'
	}, {
		name : 'MAT_GRP_9'
	}, {
		name : 'MAT_GRP_10'
	},{
		name : 'MAT_CMF_1'
	}, {
		name : 'MAT_CMF_2'
	}, {
		name : 'MAT_CMF_3'
	}, {
		name : 'MAT_CMF_4'
	}, {
		name : 'MAT_CMF_5'
	}, {
		name : 'MAT_CMF_6'
	}, {
		name : 'MAT_CMF_7'
	}, {
		name : 'MAT_CMF_8'
	}, {
		name : 'MAT_CMF_9'
	}, {
		name : 'MAT_CMF_10'
	}  ],

	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'module/WIP/data/view_material.json',
		reader : {
			type : 'json'
		}
	}
});