Ext.define('ARC.model.Slave', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'MASTER_TABLE', type: 'string' },
		{ name: 'SEQ', type: 'int' },
		{ name: 'SLAVE_CONDITION', type: 'string' },
		{ name: 'SLAVE_KEY_FIELD1', type: 'string' },
		{ name: 'SLAVE_KEY_FIELD2', type: 'string' },
		{ name: 'SLAVE_KEY_FIELD3', type: 'string' },
		{ name: 'SLAVE_KEY_FIELD4', type: 'string' },
		{ name: 'SLAVE_KEY_FIELD5', type: 'string' },
		{ name: 'SLAVE_TABLE', type: 'string' },
		{ name: 'TASK_ID', type: 'string' },
		{ name: 'TERM_CONDITION', type: 'string' },
		{ name: 'TERM_FIELD', type: 'string' }
    ]
});