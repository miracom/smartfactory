Ext.define('RPT.model.Report', {
	extend: 'Ext.data.Model',
	
	fields: [
		{ name: 'rpt_id', type: 'string' },
		{ name: 'rpt_desc', type: 'string' },
		{ name: 'area', type: 'string' },
		{ name: 'lot_id', type: 'string '},
		{ name: 'oper_id', type: 'string' },
		{ name: 'oper_desc', type: 'string' },
		{ name: 'mat_id', type: 'string' },
		{ name: 'mat_desc', type: 'string' },
		{ name: 'oper_sts', type: 'string' },
		{ name: 'ord_id', type: 'string' },
		{ name: 'mat_qty', type: 'number' },
		{ name: 'xtype', type: 'string' },
		{ name: 'report_view', type: 'string' },
		{ name: 'insp_id', type: 'string' },
		{ name: 'plan_qty', type: 'number' },
		{ name: 'finished_qty', type: 'number' }
    ]
});
