Ext.define('RPT.model.Report', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'report_id', type: 'string'},
		{ name: 'desc', type: 'string' },
		{ name: 'type', type: 'string' },
		{ name: 'owner', type: 'string' },
		{ name: 'xtype', type: 'string '}
    ]
});