Ext.define('ARC.model.Mcondition', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'TASK_ID', type: 'string' },
		{ name: 'CONDITION_TYPE', type: 'string' },
		{ name: 'COLUMN_NAME', type: 'string' },
		{ name: 'CONDITION', type: 'string' },
		{ name: 'CONDITION_VALUE', type: 'string' }
    ]
});
