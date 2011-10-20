Ext.define('MBI.view.production.Yield', {
	extend: 'Ext.form.Panel',
	
	alias: 'widget.mbi.production.yield',
	
	title: 'Yield',
	
	defaults: {
		anchor: '100%'
	},
	
	items: [
	{
		xtype: 'textfield',
		fieldLabel: 'ID',
		name: 'factory_id',
		enableKeyEvents: true,
		listeners:
		{
			specialkey: function(field, e){
				if(e.getKey() == e.ENTER) {
					field.up('form').loadData();
				}
			}
		}
	}	,
	{
		xtype: 'textfield',
		fieldLabel: 'Product',
		name: 'product_id'
	}	,
	{
		xtype: 'textfield',
		fieldLabel: 'Description',
		name: 'type'
	},
	{
		xtype: 'textfield',
		fieldLabel: 'Yield',
		name: 'yield'
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
		}
	},
	
	loadData: function() {
	}
});