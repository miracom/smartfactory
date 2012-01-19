/** 
 * @class CMN.plugin.Supplement
 * @extends Ext.Base
 * @author Kyunghyang
 * FormDesign에서 condition view를 오른쪽 supplement영역에 표시한다. content의 view와 연동되어 생성 및 삭제된다.
 */
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
				var supplementContainer = Ext.getCmp('east');
				supplementContainer.getLayout().setActiveItem(this.getSupplement());
				if(this.getSupplement().isPanel && this.getSupplement().title) {
					supplementContainer.setTitle(this.getSupplement().title);
				} else if(client.isPanel){
					supplementContainer.setTitle(client.title);
				}
			}
		}

		function onDeactivate() {
			var supplementContainer = Ext.getCmp('east');
			supplementContainer.getLayout().setActiveItem('base');
			supplementContainer.setTitle(supplementContainer.getComponent('base').title);
		}

		function onDestroy() {
			if (this.getSupplement())
				Ext.getCmp('east').remove(this.getSupplement());
			this.setSupplement(null);
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
			this.supplement.getSupplementClient = function() {
				return this;
			};
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
