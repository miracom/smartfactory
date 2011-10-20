Ext.define('WIP.model.Operation', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'oper_id', type: 'string'},
		{ name: 'desc', type: 'string' },
		{ name: 'type', type: 'string' }
  ]
});