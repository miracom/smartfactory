Ext.define('WIP.view.NavOperation', {
	extend: 'Ext.view.View',
	
	store: 'WIP.store.OperationStore',
	itemSelector: 'div',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {
			SmartFactory.addContentView({
				xtype: 'wip.oper.operation',
				title: 'Oper-' + record.get('oper_id'),
				data: record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'operation-list',
	itemSelector: '.operation-list-item', //itemselector로 div 지정 
	overItemCls: 'operation-list-item-hover',
	tpl:'<tpl for="."><div class="operation-list-item">{oper_id} - {desc}</div></tpl>'
});