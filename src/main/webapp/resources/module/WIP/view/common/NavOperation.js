Ext.define('WIP.view.common.NavOperation', {
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
	}, {
		text : 'M',
		handler : function(button) {
			SmartFactory.addContentView(Ext.create('WIP.view.setup.MaterialSetup', {
				title : 'Material Setup'
			}));
		}
	} ],
	
	items : [{
		xtype : 'dataview', 
		store: 'WIP.store.OperationStore',
		
		listeners: {
			render: function(view) {
				view.store.load();
			},
			itemclick: function(view, record, item, index, e, opt) {
				SmartFactory.addContentView(Ext.create('WIP.view.transaction.Operation', {
					xtype: 'wip.oper.operation',
					title: 'Oper-' + record.get('oper_id'),
					data: record,
					closable: true
				}));
			}
		},
		
		autoScroll: true,
		
		cls: 'operation-list',
		itemSelector: '.operation-list-item',
		overItemCls: 'operation-list-item-hover',
		tpl:'<tpl for="."><div class="operation-list-item">{oper_id} - {desc}</div></tpl>'
	}]
});