Ext.define('MBI.view.FormDesign', {
	extend: 'Ext.panel.Panel',
	
	title: 'Form Design',
	
	autoScroll: true,
	
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	
	listeners : {
		render : function(panel, opts) {
			this.store = Ext.create('MBI.store.FormDesign');

			this.store.on('datachanged', this.refreshItems, this);
			this.store.on('clear', this.refreshItems, this);
			
			this.store.load();
		}
	},
	
	capitalize : function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	},
	
	refreshItems : function() {
		this.removeAll();
		
		var map = this.store.data.get(0).data;
		
		for(var item in map) {
			try {
				var capitalized = this.capitalize(item);
				var store_name = 'MBI.store.' + capitalized;
				var view_name = 'MBI.view.' + capitalized + 'View';
				//var title = capitalized;
				
				var view = Ext.create(view_name, {
					title : capitalized,
					height : 100,
					store : Ext.create(store_name, {
						data : map[item]
					})
				});
				this.add(view);
			} catch(e) {
				console.log(e);
			}
		}
	}
});