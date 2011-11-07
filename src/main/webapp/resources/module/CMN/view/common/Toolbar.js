Ext.define('CMN.view.common.Toolbar', {
	extend : 'Ext.toolbar.Toolbar',
	
	alias : 'widget.cmn.toolbar',
	id : 'favorites_toolbar',
	
	listeners : {
		render : function(comp, obj) {
			var store = Ext.StoreManager.lookup('CMN.store.FavoriteStore');
			store.on('datachanged', this.store_changed, this);
			store.on('clear', this.store_changed, this);
			store.load();
		}	
	},
	
	default_handler :function(button) {
		SmartFactory.addContentView({
			xtype: 'ras.resource.resource',
			title: button.data.get('user_func_desc'),
			tabConfig : {
				tooltip: button.data.get('func_name'),
			},
			data: null,
			closable: true
		});
	},	
		
	store_changed: function(store) {
		this.removeAll();
		var records = store.data.items;
		for ( var idx in records) {
			this.add({
				iconCls : 'icon1_32',
				scale : 'large',
				tooltip : records[idx].get('user_func_desc'),
				data : records[idx],
				handler : this.default_handler
			});
		}
		this.show();
	}
});