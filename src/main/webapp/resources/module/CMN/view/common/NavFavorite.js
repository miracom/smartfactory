Ext.define('CMN.view.common.NavFavorite', {
	extend : 'Ext.grid.Panel',

	alias : 'widget.cmn.nav_favorite',

	id : 'cmn.view.nav_favorite',

	listeners : {
		render : function(comp, obj) {
			this.store.on('datachanged', this.store_changed, this);
			this.store.on('clear', this.store_changed, this);
		},
		itemclick : function(view, record, item, index, e, opt) {
			SmartFactory.addContentView({
				xtype : 'ras.resource.resource',
				title : record.get('user_func_desc'),
				tabConfig : {
					tooltip : record.get('func_name')
				},
				data : null,
				closable : true
			});
		}
	},

	tbar : [ {
		cls : 'navDoctedRefresh',
		listeners : {
			click : function(button) {
				var store = Ext.StoreManager.lookup('CMN.store.FavoriteStore');
				store.load();
			}
		}
	}, {
		cls : 'navDoctedClear',
		listeners : {
			click : function() {
				var store = Ext.StoreManager.lookup('CMN.store.FavoriteStore');
				store.removeAll(false);
			}
		}
	} ],

	columns : [ {
		header : 'Function',
		dataIndex : 'func_name'
	}, {
		header : 'Description',
		dataIndex : 'user_func_desc'
	} ],

	store : 'CMN.store.FavoriteStore',

	store_changed : function() {
		this.getView().refresh();
	}
});