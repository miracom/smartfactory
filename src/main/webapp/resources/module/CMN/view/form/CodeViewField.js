Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.field.Text',
	alias: 'widget.codeview',
	cls : 'resourceSelector',
	
	//disabled : true,
	
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
//	selectedCallback : function(field, record) {
//		var selector = SmartFactory.selector.get(field.selectorName);
//		field.record = record;
//		
//		var displayField = selector.displayField || selector.valueField;
//		if(displayField instanceof Array) {
//			var value = '';
//			for(var i in displayField) {
//				value += '[' + record.get(displayField[i]) + ']';
//			}
//			field.setRawValue(value);
//		} else {
//			field.setRawValue(record.get(displayField));
//		}
//	},
	
	//value Convert
	rawToValue : function(raw) {
		var selector = SmartFactory.selector.get(this.selectorName);
		if(raw) {
			var valueField = selector.valueField;
			if(valueField instanceof Array) {
				var values = '';
				for(var i in valueField) {
					values += '[' + raw.get(valueField[i]) + ']';
				}
				
				return values;
			} else {
				return raw.get(valueField);
			}			
		}
		
		return null;
	},
	
	//display Convert
	valueToRaw : function(value) {
		var selector = SmartFactory.selector.get(this.selectorName);
		if(value) {
			var displayField = selector.displayField || selector.valueField;
			if(displayField instanceof Array) {
				var values = '';
				for(var i in displayField) {
					values += '[' + value.get(displayField[i]) + ']';
				}
				return values;
			} else {
				return record.get(field);
			}			
		}
		
		return null;
	},
	
    setRawValue: function(value) {
    	this.rawValue = value;
    	
        // Some Field subclasses may not render an inputEl
        if (this.inputEl) {
        	this.inputEl.dom.value = value;
        }
    },
    
    getRawValue: function() {
    	v = (this.getValue() ? this.getValue() : Ext.value(this.rawValue, ''));    
    	return v;
    },
    
	setValue: function(value) {
		this.value = value;
        this.setRawValue(this.valueToRaw(value));
    },
    
    getValue: function() {
    	return this.rawToValue(this.value);
    },
    
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
            	//SmartFactory.selector.show(field.selectorName, field.filter, field.selectedCallback, field);
        		SmartFactory.selector.show(field.selectorName, field.filter, field);
                return false;
            });
        }
	}
});
