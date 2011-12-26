Ext.define('CMN.plugin.Supplement', {
	init : function(client) {
		/*
		 * TODO get any simple model object to build supplement panel which will
		 * be showed on east side.
		 */

		// client.showMessage = this.showMessage.createDelegate(this);
		// if (client.rendered) {
		// this.onRender(client);
		// } else {
		// client.on('render', this.onRender, this);
		// }
		/*
		 * Sample
		 */

		if (!client.getSupplement) {
			client.getSupplement = function() {
				return this.supplement;
			};
		}

		if (!client.setSupplement) {
			client.setSupplement = this.setSupplement;
		}

		if(!client.getSupplement()) {


			client.supplement = Ext.create('CMN.view.common.Supplement', {
				// title : client.title
				
			});
		}
		
		client.on('activate', this.onActivate, client);
		client.on('deactivate', this.onDeactivate, client);
		client.on('destroy', this.onDestroy, client);
		client.on('render', this.onRender, client);
	},

	setSupplement : function(supplement) {
		if (this.getSupplement())
			Ext.getCmp('east').remove(this.getSupplement());

		this.supplement = supplement;
		
		if (this.getSupplement()) {
			Ext.getCmp('east').add(this.getSupplement());
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