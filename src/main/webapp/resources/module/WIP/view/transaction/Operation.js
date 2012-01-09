Ext.define('WIP.view.transaction.Operation', {
	extend: 'Ext.form.Panel',
	
	title: 'Operation',
	bodyPadding: 15,
	
	defaults: {
		anchor: '100%'
	},
	
	items: [
	{
		xtype: 'textfield',
		fieldLabel: 'ID',
		name: 'oper_id'
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
	}
	],
	
	buttons: [
	{ 
		text: 'Reset', 
		handler: function(button) {
			this.up('form').loadData();
		} 
	},
	{ 
		text: 'Save',
		handler: function(button) {
			SmartFactory.showCodeView({});
		}
	}
	],
	
	initComponent: function() {
		this.callParent();
		this.loadData();
	},
	
	loadData: function() {
		if(this.data){
			this.getForm().loadRecord(this.data);
		}
	}
});