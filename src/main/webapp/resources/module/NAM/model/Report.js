Ext.define('NAM.model.Report', {
	extend: 'Ext.data.Model',
	
	fields: [
	{ name: 'report_id', type: 'string' },
	{ name: 'report_desc', type: 'string' },
	{ name: 'report_view', type: 'string' }
	]
});