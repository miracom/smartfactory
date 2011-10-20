Ext.namespace('Ext.ux.menu');

Ext.define('Ext.ux.menu.StoreMenu', {
	extend: 'Ext.menu.Menu',
	
	constructor: function(config) {
		Ext.ux.menu.StoreMenu.superclass.constructor.apply(this, arguments);
		if(!this.store){
			this.store = new Ext.data.Store({
				autoLoad: false,
		
				fields: ['text','id', 'menu'],
		
				proxy: Ext.merge({
					type: 'ajax',
					url: 'data/menus.json',
					reader: {
						type: 'json'
					}
				}, this.baseParams)
			});
		}

		this.on('render', this.onMenuLoad, this);
		this.store.on('beforeload', this.onBeforeLoad, this);	
		this.store.on('load', this.onLoad, this);
	},

	loadingText: 'Loading...',
	loaded:      false,

	onMenuLoad: function(){
		if(!this.loaded){
			try{
				this.store.load();
			}catch(error){
			}
		}
	},

	updateMenuItems: function(records) {
		this.removeAll();

		// this.el.sync(); ???

		for(var i=0, len=records.length; i<len; i++){
			this.add(records[i].data);
		}
		this.hide();
		this.show();

		this.loaded = true;
	},

	onBeforeLoad: function(store){
		this.store.baseParams = this.baseParams;
		this.add('<span class="loading-indicator">' + this.loadingText + '</span>');
	},
	
	onLoad: function(store, records){
		this.updateMenuItems(records);		
	}
});
