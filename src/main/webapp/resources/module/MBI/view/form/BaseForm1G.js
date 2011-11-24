Ext.define('MBI.view.form.BaseForm1G', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mbi.baseform1g',

	layout : {
		type : 'vbox',
	},
	autoScroll: true,
	
	listeners : {
		render : function(panel, opts) {
			this.store.on('datachanged', this.refreshItems, this);
			this.store.on('clear', this.refreshItems, this);
			this.store.load();
		}
	},
	
	refreshItems : function() {
		this.removeAll();
		
		var storeInfo = Ext.create('MBI.view.form.builder.StoreBuilder',{
			formInfoData : this.store.data
		});

		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder',{
			formInfoData : this.store.data,
			store : storeInfo
		}).buildGrid();  
		
		this.add(view_grid);
	}
});
