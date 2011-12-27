Ext.define('ARC.model.Basic', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'TERM', type: 'auto' },
		{ name: 'DAYS', type: 'auto' },
		{ name: 'OVERWRITE_FLAG', type: 'auto' },
		{ name: 'MASTER_DELETION', type: 'auto' },
		{ name: 'SLAVE_DELETION', type: 'auto' },
		{ name: 'BACKUP_METHOD', type: 'auto' },
		{ name: 'LOG_TYPE', type: 'auto' }
    ]
});
