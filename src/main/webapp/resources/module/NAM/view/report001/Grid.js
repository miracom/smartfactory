Ext.define('NAM.view.report001.Grid', {
	extend: 'Ext.grid.Panel',
	
	store: 'NAM.store.Report001Store',
	
	columns: [{
		text: 'Location',
		dataIndex : 'location',
	},{
		text: 'Lot ID',
		dataIndex : 'lot_id'
	},{
		text: 'Oper',
		dataIndex: 'oper_id'
	},{
		text: 'Description',
		dataIndex: 'oper_desc'
	},{
		text: 'Material',
		columns: [
			{
				text: 'Code',
				dataIndex: 'mat_id'
			},
			{
				text: 'Name',
				dataIndex: 'mat_desc'
			}
		]
	},{
		text: 'Data1',
		dataIndex:'data1'
	},{
		text: 'Data2',
		dataIndex: 'data2'
	}]
	
});