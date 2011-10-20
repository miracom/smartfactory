Ext.define('MBI.model.Yield', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'factory_id', type: 'string'},
		{ name: 'product_id', type: 'string' },
		{ name: 'desc', type: 'string' },
		{ name: 'yield', type: 'float' }
  ]
});