Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.codeview',
	
	cls :'hboxLine',
	
	layout: {
        type: 'hbox',
        align:'top'
    },
    
    defaults:{margins:'0 3 0 0'},
    
    constructor : function(config) {
    	CMN.view.form.CodeViewField.superclass.constructor.apply(this, arguments);
	},
	
	initComponent : function() {
		this.callParent();
	
		this.add(this.buildTxtfield());
		this.add(this.buildSerach());
	},

	buildTxtfield : function()
	{
		var items = [];
		var txtField = this.txtFieldName;
		var txtWidth = this.txtFieldFlex;
		
		if(txtField instanceof Array) {
			for(var i in txtField) {
				var fieldName = txtField[i];
				if(this.name instanceof Array)
					fieldName = this.name[i];
				else if(this.name && i<1)
					fieldName = this.name;
				
				items.push({
					listeners : {
						specialkey : function(textfield, e) {
		                    if (e.getKey() != e.ENTER)
		                    	return;
		                    var fieldset = this.up('fieldcontainer');
		                    SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
						}
					},
					xtype: 'textfield',
					//name: txtField[i],
					name : fieldName,
					itemId: txtField[i],
					flex: txtWidth[i]
				});
			}
		} else {
			var fieldName = txtField;
			if (this.name) fieldName = this.name;
			items.push({
				listeners : {
					specialkey : function(textfield, e) {
	                    if (e.getKey() != e.ENTER)
	                    	return;
	                    var fieldset = this.up('fieldcontainer');
	                    SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
	            	}
				},
				xtype: 'textfield',
				name: fieldName,
				itemId: txtField,
				flex: txtWidth
			});
		}
		
		return items;
	},
	
	buildSerach : function()
	{
		return {
			xtype: 'button',
			iconCls:'btnCodeView',
			handler: function(){
				var fieldset = this.up('fieldcontainer');
            	//var refVal = fieldset.up('form').getValues();
            	
				SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
			}
		};
	},
	
	selectedCallback : function(fieldset, record) {
		var codeview = SmartFactory.codeview.get(fieldset.codeviewName);
		var txtField = codeview.client.txtFieldName;
		
		if(txtField instanceof Array) {
			for(var i in txtField) 
			{	
				var field = fieldset.getComponent(txtField[i]);
				
				if(field && field.itemId == txtField[i])
				{
					field.setRawValue(record.get(txtField[i]));
				}
			}
		} else {
			var field = fieldset.getComponent(txtField);

			if(field && field.itemId == txtField)
			{
				field.setRawValue(record.get(txtField));
			}
		}
	}
});

