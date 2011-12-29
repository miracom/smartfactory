Ext.define('ARC.model.DbList', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'DB_NAME', type: 'string' },
		{ name: 'ORIGINAL_DRIVERNAME', type: 'string' },
		{ name: 'ORIGINAL_URL', type: 'string' },
		{ name: 'ORIGINAL_USERNAME', type: 'string' },
		{ name: 'ORIGINAL_PASSWORD', type: 'string' },
		{ name: 'BACKUP_DRIVERNAME', type: 'string' },
		{ name: 'BACKUP_URL', type: 'string' },
		{ name: 'BACKUP_USERNAME', type: 'string' },
		{ name: 'BACKUP_PASSWORD', type: 'string' }
    ]
});