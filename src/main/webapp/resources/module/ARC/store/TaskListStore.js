Ext.define('ARC.store.TaskListStore', {
	extend : 'Ext.data.Store',

	storeId : 'arc.archivetask_store',

	autoLoad : false,

	model : 'ARC.model.TaskList',

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