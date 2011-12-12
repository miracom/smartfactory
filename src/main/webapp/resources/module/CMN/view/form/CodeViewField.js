Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.field.Text',
	alias: 'widget.codeview',
	cls : 'resourceSelector',
	
	disabled : true,
	
	/*
	 * mandatory config fields : valueField, selectorName
	 * optional config fields : displayField (if not configured, valueField will be used to display)
	 */
//	constructor : function(config) {
//		
//		config = Ext.applyIf(config, {
//			valueField : '',
//			displayField : ''
//		});
//
//		CMN.view.form.CodeViewField.superclass.constructor.call(this, config);
//	},
	
	/*
	 * selectedCallback will be called back when a record selected on Selector window.
	 * The third parameter 'selector' is the object which registered in selectors registry. 
	 */
	selectedCallback : function(field, record) {
		console.log(field.selectorName);
		var selector = SmartFactory.selector.get(field.selectorName);
		field.record = record;
		
		var displayField = selector.displayField || selector.valueField;
		if(displayField instanceof Array) {
			var value = '';
			for(var i in displayField) {
				value += '[' + record.get(displayField[i]) + ']';
			}
			
			field.setRawValue(value);
		} else {
			field.setRawValue(record.get(displayField));
		}
	},
	//display
	rawToValue : function(raw) {
		var selector = SmartFactory.selector.get(this.selectorName);
		if(this.record) {
			var field = selector.valueField;
			if(field instanceof Array) {
				var value = '';
				for(var i in field) {
					value += '[' + record.get(field[i]) + ']';
				}
				
				return field.setRawValue(value);
			} else {
				return field.setRawValue(record.get(field));
			}			
		}
		
		return null;
	},
	//value
	valueToRaw : function(value) {
		var selector = SmartFactory.selector.get(this.selectorName);
		if(this.record) {
			var field = selector.displayField || selector.valueField;
			if(field instanceof Array) {
				var value = '';
				for(var i in field) {
					value += '[' + record.get(field[i]) + ']';
				}
				
				return field.setRawValue(value);
			} else {
				return field.setRawValue(record.get(field));
			}			
		}

		return null;
	},
	
//	setValue: function(value) {
//	        var me = this;
//	        t.setRawValue(me.valueToRaw(value));
//	        return me.mixins.field.setValue.call(me, value);
//    },
    
	
	listeners : {
/* Text = Enable: Enter event 삭제
		specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
            	SmartFactory.selector.show(field.selectorName, field.filter, field.selectedCallback, field);
            }
            return false;
        },
*/
        render: function(field){
        	field.getEl().on('click',function(e){
            	SmartFactory.selector.show(field.selectorName, field.filter, field.selectedCallback, field);
                return false;
            });
        }
	}
});
