Ext.define('ARC.store.TaskStore', {
	extend : 'Ext.data.Store',

	storeId : 'arc.archivetask_store',

	autoLoad : false,

	model : 'ARC.model.Task',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/taskList.json',
		reader : {
			type : 'json'
			//root : 'result',
			//totalProperty : 'total'
		}
	}
});