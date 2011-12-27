Ext.define('ARC.store.ArchiveTaskStore', {
	extend : 'Ext.data.Store',

	storeId : 'arc.archivetask_store',

	autoLoad : false,

	model : 'ARC.model.ArchiveTask',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/tasklist22.json',
		reader : {
			type : 'json',
			root : 'result',
			totalProperty : 'total'
		}
	}
});