Ext.define('WIP.store.OperationStore', {
	extend: 'Ext.data.Store',
	
	autoLoad: false,
	fields : [ {
		name : 'oper_id',
		type : 'string'
	},{
		name : 'desc',
		type : 'string'
	},{
		name : 'type',
		type : 'string'
	},{
		name : 'factory_id',
		type : 'string'
	},{
		name : 'unit_1',
		type : 'string'
	},{
		name : 'unit_2',
		type : 'string'
	},{
		name : 'unit_3',
		type : 'string'
	},{
		name : 'created_at',
		type : 'string'
	},{
		name : 'updated_at',
		type : 'string'
	}, {
		name : 'OPER_GRP_1'
	}, {
		name : 'OPER_GRP_2'
	}, {
		name : 'OPER_GRP_3'
	}, {
		name : 'OPER_GRP_4'
	}, {
		name : 'OPER_GRP_5'
	}, {
		name : 'OPER_GRP_6'
	}, {
		name : 'OPER_GRP_7'
	}, {
		name : 'OPER_GRP_8'
	}, {
		name : 'OPER_GRP_9'
	}, {
		name : 'OPER_GRP_10'
	},{
		name : 'OPER_CMF_1'
	}, {
		name : 'OPER_CMF_2'
	}, {
		name : 'OPER_CMF_3'
	}, {
		name : 'OPER_CMF_4'
	}, {
		name : 'OPER_CMF_5'
	}, {
		name : 'OPER_CMF_6'
	}, {
		name : 'OPER_CMF_7'
	}, {
		name : 'OPER_CMF_8'
	}, {
		name : 'OPER_CMF_9'
	}, {
		name : 'OPER_CMF_10'
	},{
		name : 'OPER_CMF_11'
	}, {
		name : 'OPER_CMF_12'
	}, {
		name : 'OPER_CMF_13'
	}, {
		name : 'OPER_CMF_14'
	}, {
		name : 'OPER_CMF_15'
	}, {
		name : 'OPER_CMF_16'
	}, {
		name : 'OPER_CMF_17'
	}, {
		name : 'OPER_CMF_18'
	}, {
		name : 'OPER_CMF_19'
	}, {
		name : 'OPER_CMF_20'
	} ],
	
	proxy: {
		type: 'ajax',
		url : 'module/WIP/data/view_operation.json',
		reader: {
			type: 'json'
		}
	}
});