Ext.define('ARC.model.TaskList', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'TASK_ID', type: 'string' },
		{ name: 'MASTER_TABLE', type: 'string' },
		{ name: 'OVERWRITE_FLAG', type: 'string' },
		{ name: 'MASTER_DELETION', type: 'string' },
		{ name: 'SLAVE_DELETION', type: 'string' },
		{ name: 'BACKUP_METHOD', type: 'string' },
		{ name: 'KEY_FIELD1', type: 'string' },
		{ name: 'DB_NAME', type: 'string' }	
    ]
});
