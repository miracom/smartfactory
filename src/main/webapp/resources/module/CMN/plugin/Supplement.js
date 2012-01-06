Ext.define('CMN.plugin.Supplement', {
	extend : 'Ext.Base',
	
	init : function(client) {
		if (!client.getSupplement) {
			client.getSupplement = function() {
				return this.supplement;
			};
		}

		if (!client.setSupplement) {
			client.setSupplement = this.setSupplement;
		}

		function onRender() {
			if(this.getSupplement())
				this.setSupplement(this.getSupplement());
		}

		function onActivate() {
			if (this.getSupplement())
				Ext.getCmp('east').getLayout().setActiveItem(this.getSupplement());
		}

		function onDeactivate() {
			if (this.getSupplement())
				Ext.getCmp('east').getLayout().setActiveItem('base');
		}

		function onDestroy() {
			if (this.getSupplement())
				Ext.getCmp('east').remove(this.getSupplement());
		}

		client.on('activate', onActivate, client);
		client.on('deactivate', onDeactivate, client);
		client.on('destroy', onDestroy, client);
		client.on('render', onRender, client);
	},

	setSupplement : function(supplement) {
		if(Ext.isString(supplement)) {
			this.supplement = Ext.create(supplement);
		} else {
			this.supplement = supplement;
		}
		
		if (this.getSupplement()) {
			this.supplement = Ext.getCmp('east').add(this.getSupplement());
			Ext.getCmp('east').getLayout().setActiveItem(this.getSupplement());
			this.getSupplement().doLayout();
		}
	},
	
});
