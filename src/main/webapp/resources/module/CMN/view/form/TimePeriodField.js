Ext.define('CMN.view.form.TimePeriodField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.timeperiod',
	
	cls :'hboxLine',
	
	layout: {
        type: 'hbox',
        align:'top'
    },
	
    defaults:{margins:'0 3 0 0'},
	
    constructor : function(config) {
    	CMN.view.form.TimePeriodField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.fieldLabel = this.fieldLabel + '  (FROM ~ TO)';
		this.items = this.buildItems();
		CMN.view.form.TimePeriodField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		var fieldId = 'valueField';
		var items=[];
		//items.push(this.buildValue(fieldId,'from'));
		items.push(this.buildField(fieldId,'from'));
		items.push({html : "~"});
		//items.push(this.buildValue(fieldId,'to'));
		items.push(this.buildField(fieldId,'to'));
		console.log(items);
		return items;
	},
//	buildValue : function(fieldId,pos){
//		return {
//			xtype : 'textfield',
//			hidden : true,
//			name : this.name,
//			itemId : fieldId+pos,
//			value : this.getDefaultValue()
//		};
//	},
	buildField : function(fieldId,pos){
		var valueFormat = this.getValueFormat();
		return [{
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId+pos,
			value : this.getDefaultValue()
		}, {
			listeners : {
				change : function(field, newValue, oldValue){ 
					var container = this.up('fieldcontainer');
					var valueField = container.getComponent(fieldId+pos);
					var valueString = '';

					var fromValue = container.getComponent('time'+fieldId+'from').getValue();
					var toValue = container.getComponent('time'+fieldId+'to').getValue();
					
					if ((toValue-fromValue >= 0 || !fromValue || !toValue) && newValue)
						valueString = Ext.Date.format(newValue,valueFormat);
					else
						this.setValue(valueString);
					
					valueField.setValue(valueString);
				}
			},
			xtype: 'timefield',
			format : this.getFormat(),
			name : this.name+'_time',
			value : this.defaultValue,
			itemId : 'time'+fieldId+pos,
			flex: 1
		}];
	},
	getDefaultValue : function(){
		if(this.defaultValue){	
			return Ext.Date.format(this.defaultValue,this.getFormat());
		}
		return '';
	},
	getValueFormat : function(){
		if (this.valueFormat)
			return this.valueFormat;
		return 'Hi'; //2301
	},
	getFormat : function(){
		if (this.format)
			return this.format;
		return 'H:i'; //23:01
	}
});