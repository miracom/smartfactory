Ext.define('CMN.view.form.DateTimeField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.datetimex',
	
	cls :'hboxLine',
	
	layout: {
        type: 'hbox',
        align:'top'
    },
	
    defaults:{margins:'0 3 0 0'},
	
    constructor : function(config) {
    	CMN.view.form.DateTimeField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.items = this.buildItems();
		
		CMN.view.form.DateTimeField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		//var type = this.type; // date,time,datetime,datetimeto,dateto,timeto,
		var fieldId = 'valueField'; // + 1
		var items= [this.buildValue(fieldId)];
		if(this.type == 'date')			items.push(this.buildDate(fieldId,1));
		else if(this.type == 'time')	items.push(this.buildTime(fieldId,1));
		else if(this.type == 'datetime')	items.push(this.buildDate(fieldId,3),this.buildTime(fieldId,2));
		
		return items;
	},
	buildValue : function(fieldId){
		return {
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId,
			value : this.getDefaultValue()
		};
	},
	buildDate : function(fieldId,flex){
		var valueDateFormat = this.getValueDateFormat();
		var valueTimeFormat = this.getValueTimeFormat();
		return {
			listeners : {
				change : function(field, newValue, oldValue){ 
					var targetField = this.up('fieldcontainer').getComponent(fieldId);
					var timeField = this.up('fieldcontainer').getComponent('time'+fieldId);
					var timeVal = '';
					var dateString = '';
					
					if(newValue)
						dateString = Ext.Date.format(newValue,valueDateFormat);
					
					if(timeField){
						timeVal = timeField.getValue();
						if (!timeVal)	timeVal = ''; 
						else timeVal = Ext.Date.format(timeVal,valueTimeFormat);
						targetField.setValue(dateString+timeVal);
					}
					else
						targetField.setValue(dateString);
                }
			},
			xtype: 'datefield',
			format : this.getDateFormat(), 
			name :  this.name+'_date',
			value : this.defaultValue,
			itemId : 'date'+fieldId,
			flex: flex
		};
	},
	
	buildTime : function(fieldId,flex){
		var valueDateFormat = this.getValueDateFormat();
		var valueTimeFormat = this.getValueTimeFormat();
		return {
			listeners : {
				change : function(field, newValue, oldValue){ 
					var targetField = this.up('fieldcontainer').getComponent(fieldId);
					var dateField = this.up('fieldcontainer').getComponent('date'+fieldId);
					var dateVal = '';
					var timeString = '';
					
					if(newValue)
						timeString = Ext.Date.format(newValue,valueTimeFormat);
					
					if(dateField){
						dateVal = dateField.getValue();
						if (!dateVal)	return; 
						dateVal = Ext.Date.format(dateVal,valueDateFormat);
						targetField.setValue(dateVal+timeString);
					}
					else
						targetField.setValue(timeString);
				}
			},
			xtype: 'timefield',
			format : this.getTimeFormat(),
			name : this.name+'_time',
			value : this.defaultValue,
			itemId : 'time'+fieldId,
			flex: flex
		};
	},
	getDefaultValue : function(){
		var valueFormat = this.getDateFormat()+this.getTimeFormat();
		if(this.defaultValue){	
			if (this.type == 'date'){
				valueFormatthis.getDateFormat();
			}
			else if (this.type == 'time'){
				valueFormat = this.getTimeFormat();
			}
			return Ext.Date.format(this.defaultValue,valueFormat);
		}
		return '';
	},
	getValueDateFormat : function(){
		if (this.valueDateFormat)
			return this.valueDateFormat;
		return 'Ymd'; //99991231
	},
	getValueTimeFormat : function(){
		if (this.valueTimeFormat)
			return this.valueTimeFormat;
		return 'Hi'; //2301
	},
	getDateFormat : function(){
		if (this.dateFormat)
			return this.dateFormat;
		return 'Y-m-d';// 9999-12-31
	},
	getTimeFormat : function(){
		if (this.timeFormat)
			return this.timeFormat;
		return 'H:i'; //23:01
	}
});