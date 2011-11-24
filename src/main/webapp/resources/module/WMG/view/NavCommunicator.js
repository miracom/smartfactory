Ext.define('WMG.view.NavCommunicator', {
	extend: 'Ext.panel.Panel',

	tbar : [ {
		text : 'Refresh',
		listeners : {
			click : function(button) {
				var store = Ext.StoreManager.lookup('WMG.store.CommunicatorStore');
				store.load();
			}
		}
	}, {
		text : 'Clear',
		listeners : {
			click : function() {
				var store = Ext.StoreManager.lookup('WMG.store.CommunicatorStore');
				store.removeAll(false);
			}
		}
	} ],

	items: [
	{
		xtype: 'dataview',
		store: Ext.StoreManager.lookup('WMG.store.CommunicatorStore'),
		autoScroll: true,
		
		itemSelector: 'div',

		cls: 'operation-list',
		itemSelector: '.communicator-list-item', //itemselector로 div 지정 
		overItemCls: 'operation-list-item-hover',
		tpl:'<tpl for="."><div class="communicator-list-item">{name} - {id}</div></tpl>',

		listeners : {
			render : function(view, obj) {
				this.store.on('datachanged', this.store_changed, this);
				this.store.on('clear', this.store_changed, this);

				this.store.load();
			},
			itemclick : function(view, record, item, index, e, opt) {
			}
		},

		store_changed : function() {
			this.refresh();
		}
	}
	],
	
});