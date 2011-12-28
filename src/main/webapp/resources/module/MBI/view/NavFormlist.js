Ext.define('MBI.view.NavFormlist', {
	extend : 'Ext.tab.Panel',

	store : Ext.getStore('MBI.store.SecfundefNt'),

	initComponent : function() {
		this.callParent();

		this.add(Ext.create('MBI.view.FormListView', {
			title : 'Form Model',
			store : this.store
		}));
		this.add(Ext.create('MBI.view.FunctionListView', {
			title : 'Form View',
			store : this.store
		}));
	},

	listeners : {
		render : function(view) {
			view.store.load();
		}
	},

	tbar : [ {
		cls : 'navRefreshBtn',
		listeners : {
			click : function(button) {
				var tabpanel = button.up('tabpanel');
				tabpanel.store.load();
			}
		}
	}, {
		cls : 'navClearBtn',
		listeners : {
			click : function(button) {
				var tabpanel = button.up('tabpanel');
				tabpanel.store.removeAll(false);
			}
		}
	} ]
});