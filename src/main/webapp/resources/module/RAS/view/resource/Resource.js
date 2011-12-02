Ext.define('RAS.view.resource.Resource', {
	extend: 'Ext.form.Panel',
	
	alias: 'widget.ras.resource.resource',
	
	title: 'Resource',
	bodyPadding: 15,
	
	constructor : function(config) {
		this.supplement = Ext.create('CMN.view.common.Supplement', {
			title : config.title || this.title
		});
		
		RAS.view.resource.Resource.superclass.constructor.call(this, config);
	},
	
	defaults: {
		anchor: '100%'
	},
	
	items: [
	{
		xtype: 'textfield',
		fieldLabel: 'ID',
		name: 'resource_id',
		enableKeyEvents: true,
		listeners:
		{
			specialkey: function(field, e){
				if(e.getKey() == e.ENTER) {
					field.up('form').loadData(this.value);
				}
			}
		}
	}	,
	{
		xtype: 'textfield',
		fieldLabel: 'Description',
		name: 'desc'
	}	,
	{
		xtype: 'textfield',
		fieldLabel: 'Type',
		name: 'type'
	},
	{
		xtype: 'textfield',
		fieldLabel: 'Owner',
		name: 'owner'
	}
	],
	
	buttons: [
	{ 
		text: 'Reset', 
		handler: function(button) {
			this.up('form').loadData();
		} 
	},
	{ text: 'Save' }
	],
	
	listeners: {
		afterrender: function() {
			this.loadData();
		},
		activate: function() {
			this.getForm().findField('resource_id').focus(false, 100);
			Ext.getCmp('east').getLayout().setActiveItem(this.supplement);
		},
		destroy: function() {
			Ext.getCmp('east').remove(this.supplement);
		}
	},
	
	loadData: function(resource_id) {
		var resource_id = resource_id || (this.data && this.data.get('resource_id'));
		console.log(resource_id);

		if(resource_id){
			var store = Ext.data.StoreManager.lookup('RAS.store.ResourceStore');
			store.load({
				scope: this,
				params: { res_id : resource_id },
				callback: function(records, operation, success) {
					this.loadRecord(records[0]);
				}
			});
//			this.load({
//				url: 'module/RAS/data/resource.json',
//				method: 'GET',
//				type: 'rest',
//				params: {resource_id:resource_id},
//				waitMsg: 'Loading...',
//				failure: function(form, action) {
//					console.log(action.failureType);
//					// Ext.example.msg('Failure', action.failureType);
//					form.reset();
//				}
//			})
		}
	}
});