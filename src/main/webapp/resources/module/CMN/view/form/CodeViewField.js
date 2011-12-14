Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.panel.Panel',
	alias: 'widget.codeview',
	height: 60,
	
	layout: {
        type: 'hbox',
        padding:'5',
        align:'middle'
    },
    
    defaults:{margins:'0 5 0 0'},
    
    constructor : function(config) {
    	CMN.view.form.CodeViewField.superclass.constructor.apply(this, arguments);
	},
	
	initComponent : function() {
		this.callParent();
	
		this.add(this.txtfield());
		this.add(this.btserach());
		
	},

	txtfield : function()
	{
		var items = [];
		var txtField = this.txtFieldName;
		var txtWidth = this.txtFieldWidth;
		
		if(txtField instanceof Array) {
			for(var i in txtField) {
				items.push({
					xtype: 'textfield',
					name: txtField[i],
					id: txtField[i],
					flex: txtWidth[i]
				});
			}
		} else {
			items.push({
				xtype: 'textfield',
				name: txtField,
				id: txtField,
				flex: txtWidth
			});
		}
		
		return items;
	},
	
	btserach : function()
	{
		return {
			xtype: 'button',
			text: '...',
			handler: function(){
				var panel = this.up('panel');
				SmartFactory.selector.show(panel.selectorName, panel.filter, panel.selectedCallback, panel);
				//panel.getChildByElement('name');
			}
		};
	},
	
	selectedCallback : function(field, record) {
		var selector = SmartFactory.selector.get(field.selectorName);

		var displayField = selector.displayField || selector.valueField;
		if(displayField instanceof Array) {
			for(var i in displayField) {
				if(field.getChildByElement(displayField[i]))
				{
					field.getChildByElement(displayField[i]).setRawValue(record.get(displayField[i]));
				}
			}
		} else {
			if(field.getChildByElement(displayField))
			{
				field.getChildByElement(displayField).setRawValue(record.get(displayField));
			}
		}
	}
});
