Ext.define('ARC.store.BasicStore', {
	extend : 'Ext.data.Store',

	storeId : 'arc.archivebasic_store',

	autoLoad : false,

	model : 'ARC.model.Basic',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/taskInfo.json',
		reader : {
			type : 'json',
			root : 'taskBasic',
			//totalProperty : 'total'
		}
	},
	
	setParams : function(params)
	{
		this.proxy.extraParams = params;
	}
});