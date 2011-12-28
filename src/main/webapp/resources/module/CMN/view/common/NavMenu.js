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
		cls : 'navRefreshBtn',
		listeners : {
			click : function(button) {
				var store = Ext.StoreManager.lookup('CMN.store.MenuStore');

				/* 
				 * store.load()와 store.setRootNode(null)은 동일하게 자동 reload처럼 동작한다.(4.0)
				 * store.load()는 노드들을 완전히 제거하지 못한다. (4.0.7) 따라서, setRootNode(null)을 사용한다. 
				 */
				store.setRootNode(null);
			}
		}
	} ],

	store : 'CMN.store.MenuStore',

	store_changed : function(store) {
		console.log(store);
		this.getView().refresh();
	}
});