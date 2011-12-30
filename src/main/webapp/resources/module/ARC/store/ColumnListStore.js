Ext.define('ARC.store.ColumnListStore', {
	extend : 'Ext.data.Store',
	
	autoLoad : false,

	model : 'ARC.model.ColumnList',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/columnlist.json',
		reader : {
			type : 'json',
			//root : 'taskBasic',
			//totalProperty : 'total'
		}
	},
	
	setParams : function(params)
	{
		this.proxy.extraParams = params;
	}
});