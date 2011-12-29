Ext.define('ARC.model.ArchiveTask', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'taskId', type: 'string' },
		{ name: 'dbId', type: 'string' },
		{ name: 'masterTable', type: 'string' },
		{ name: 'overWriteFlag', type: 'string' },
		{ name: 'slaveTableDeletion', type: 'string' },
		{ name: 'masterTableDeletion', type: 'string' },
		{ name: 'backupType', type: 'string' }
    ]
});
