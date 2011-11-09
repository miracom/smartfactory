Ext.define('NAM.model.Report001', {
	extend: 'Ext.data.Model',
	
	fields: [
	{ name: 'location', type: 'string'},
	{ name: 'lot_id', type: 'string'},
	{ name: 'oper_id', type: 'string'},
	{ name: 'oper_desc', type: 'string'},
	{ name: 'mat_id', type: 'string'},
	{ name: 'mat_desc', type: 'string'},
	{ name: 'data1', type: 'number'},
	{ name: 'data2', type: 'number'}
	]
});