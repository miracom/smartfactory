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
			if (this.getSupplement())
				this.setSupplement(this.getSupplement());
		}

		function onActivate() {
			if (this.getSupplement()) {
				var container = Ext.getCmp('east');
				container.getLayout().setActiveItem(this.getSupplement());
				if(this.getSupplement().isPanel && this.getSupplement().title) {
					container.setTitle(this.getSupplement().title);
				} else if(client.isPanel){
					container.setTitle(client.title);
				}
			}
		}

		function onDeactivate() {
			var container = Ext.getCmp('east');
			container.getLayout().setActiveItem('base');
			container.getComponent('base').title;
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
		if (Ext.isString(supplement)) {
			this.supplement = Ext.create(supplement);
		} else {
			this.supplement = supplement;
		}

		if (this.getSupplement()) {
			this.supplement = Ext.getCmp('east').add(this.getSupplement());
			if (this.supplement.isPanel) {
				this.supplement.preventHeader = true;
				if (this.supplement.rendered) {
					this.supplement.updateHeader();
				}

				if (this.supplement.isPanel) {
					this.supplement.setBorder(false);
				}
			}
			Ext.getCmp('east').getLayout().setActiveItem(this.supplement);
			this.supplement.doLayout();
		}
	}
});
