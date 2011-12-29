Ext.define('ARC.store.DbListStore', {
	extend : 'Ext.data.Store',

	//storeId : 'arc.archivetask_store',

	autoLoad : false,

	model : 'ARC.model.DbList',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/dbList.json',
		reader : {
			type : 'json'
			//root : 'result',
			//totalProperty : 'total'
		}
	}
});