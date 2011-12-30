Ext.define('ARC.store.TableListStore', {
	extend : 'Ext.data.Store',
	
	autoLoad : false,

	model : 'ARC.model.TableList',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/tablelist.json',
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