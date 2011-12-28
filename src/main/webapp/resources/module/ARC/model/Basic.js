Ext.define('ARC.model.Basic', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'TERM', type: 'int' },
		{ name: 'DAYS', type: 'int' },
		{ name: 'OVERWRITE_FLAG', type: 'string' },
		{ name: 'MASTER_DELETION', type: 'string' },
		{ name: 'SLAVE_DELETION', type: 'string' },
		{ name: 'BACKUP_METHOD', type: 'string' },
		{ name: 'LOG_TYPE', type: 'string' }
    ]
});
