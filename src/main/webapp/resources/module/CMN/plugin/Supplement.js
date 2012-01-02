var supplement = Ext.define('CMN.plugin.Supplement', {
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

		if(!client.getSupplement()) {
			;
		}
		
		client.on('activate', this.onActivate, client);
		client.on('deactivate', this.onDeactivate, client);
		client.on('destroy', this.onDestroy, client);
		client.on('render', this.onRender, client);
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
	
	onRender : function() {
		if(this.getSupplement())
			this.setSupplement(this.getSupplement());
	},

	onActivate : function() {
		if (this.getSupplement())
			Ext.getCmp('east').getLayout().setActiveItem(this.getSupplement());
	},

	onDeactivate : function() {
		if (this.getSupplement())
			Ext.getCmp('east').getLayout().setActiveItem('base');
	},

	onDestroy : function() {
		if (this.getSupplement())
			Ext.getCmp('east').remove(this.getSupplement());
	}
});

Ext.preg('supplement', supplement);
