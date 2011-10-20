Ext.define('RAS.model.Resource', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'resource_id', type: 'string'},
		{ name: 'desc', type: 'string' },
		{ name: 'type', type: 'string' },
		{ name: 'owner', type: 'string' }
  ]
});