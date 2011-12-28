Ext.define('WIP.view.NavOperation', {
	extend: 'Ext.panel.Panel',
	
	tbar : [ {
		cls : 'navRefreshBtn',
		listeners : {
			click : function(button) {
				var panel = button.up('panel');
				panel.getComponent(0).store.load();
			}
		}
	}, {
		cls : 'navClearBtn',
		listeners : {
			click : function(button) {
				var panel = button.up('panel');
				panel.getComponent(0).store.removeAll(false);
			}
		}
	} ],
	
	items : [{
		xtype : 'dataview', 
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
	}]
});