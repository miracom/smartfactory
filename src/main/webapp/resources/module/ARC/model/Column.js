Ext.define('ARC.model.Column', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'COLUMN_NAME', type: 'string' },
		{ name: 'DATA_TYPE', type: 'string' },
		{ name: 'DATA_LENGTH', type: 'string' },
		{ name: 'CONSTRAINT_TYPE', type : 'string'}
	]
});
