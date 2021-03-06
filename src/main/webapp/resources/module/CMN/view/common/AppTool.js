Ext.define('CMN.view.common.AppTool', {
	extend : 'Ext.toolbar.Toolbar',
	
	alias : 'widget.cmn.apptool',
	id : 'apptool',
	
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
				tooltip: button.data.get('func_name')
			},
			data: null,
			closable: true
		});
	},	
		
	store_changed: function(store) {
		this.removeAll();
		var records = store.data.items;
		for ( var idx in records) {
			var record = records[idx];
			this.add({
				iconCls : 'icon_' + record.get('func_name'),
				scale : 'large',
				tooltip : record.get('user_func_desc'),
				data : record,
				handler : this.default_handler
			});
		}
		this.show();
	}
});