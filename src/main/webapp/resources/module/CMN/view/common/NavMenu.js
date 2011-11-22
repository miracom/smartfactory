Ext.define('CMN.view.common.NavMenu', {
	extend : 'Ext.tree.Panel',

	alias : 'widget.cmn.nav_menu',

	id : 'cmn.view.nav_menu',

	rootVisible : false,

	listeners : {
		beforerender : function(comp, obj) {
			this.store.on('datachanged', this.store_changed, this);
			this.store.on('clear', this.store_changed, this);
		},
		itemclick : function(view, record, item, index, e, opt) {
			if (record.get('leaf')) {
				SmartFactory.addContentView({
					xtype : 'ras.resource.resource',
					title : record.get('text'),
					tabConfig : {
						tooltip : record.get('func_name')
					},
					data : null,
					closable : true
				});
			}
		}
	},

	tbar : [ {
		text : 'Refresh',
		listeners : {
			click : function(button) {
				var store = Ext.StoreManager.lookup('CMN.store.MenuStore');

				/* store.load()와 store.setRootNode(null)은 동일하게 자동 reload처럼 동작한다. */
				store.load();
			}
		}
	} ],

	store : 'CMN.store.MenuStore',

	store_changed : function(store) {
		console.log(store);
		this.getView().refresh();
	}
});