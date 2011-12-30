Ext.define('CMN.view.form.DatePeriodField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.dateperiod',
	
	layout : 'anchor',
	defaults : {
		anchor : '100%'
	},
    constructor : function(config) {
    	CMN.view.form.DatePeriodField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.fieldLabel = this.fieldLabel + '  (FROM ~ TO)';
		this.items = this.buildItems();
		CMN.view.form.DatePeriodField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		var fieldId = 'valueField';
		var items=[];
		//items.push(this.buildValue(fieldId,'from'));
		items.push(this.buildField(fieldId,'from'));
		//items.push(this.buildValue(fieldId,'to'));
		items.push(this.buildField(fieldId,'to'));

		return items;
	},
//	buildValue : function(fieldId,pos){
//	return {
//		xtype : 'textfield',
//		hidden : true,
//		name : this.name,
//		itemId : fieldId+pos,
//		value : this.getDefaultValue()
//	};
//},
	buildField : function(fieldId,pos){
		var valueFormat = this.getValueFormat();
		return [{
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId+pos,
			value : this.getDefaultValue()
			},{
			listeners : {
				change : function(field, newValue, oldValue){ 
					var container = this.up('fieldcontainer');
					var valueField = container.getComponent(fieldId+pos);
					var valueString = '';
					
					var fromField = container.getComponent('date'+fieldId+'from');
					var toField = container.getComponent('date'+fieldId+'to');

					var fromValue = fromField.getValue();
					var toValue = toField.getValue();
					
					if ((toValue-fromValue >= 0 || !fromValue || !toValue) && newValue)
						valueString = Ext.Date.format(newValue,valueFormat);
					else
						this.setValue(valueString);
					
					valueField.setValue(valueString);
				}
			},
			xtype: 'datefield',
			format : this.getFormat(),
			name : this.name+'_date',
			value : this.defaultValue,
			itemId : 'date'+fieldId+pos,
			emptyText : pos+' date'
			
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
		return 'Ymd'; //2301
	},
	getFormat : function(){
		if (this.format)
			return this.format;
		return 'Y-m-d';// 9999-12-31
	}
});