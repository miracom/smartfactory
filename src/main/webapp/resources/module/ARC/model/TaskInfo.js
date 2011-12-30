Ext.define('ARC.model.TaskInfo', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'taskBasic', type: 'auto' },
		{ name: 'taskMaster', type: 'auto' },
		{ name: 'taskMasterCondition', type: 'auto'},
		{ name: 'taskSlave', type: 'auto' }	
    ]
});
