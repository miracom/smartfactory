Ext.define('CMN.view.form.DateTimePeriodField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.datetimeperiod',
	
	layout : 'anchor',
	defaults : {
		anchor : '100%'
	},
	
	constructor : function(config) {
    	CMN.view.form.DateTimePeriodField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.fieldLabel = this.fieldLabel + '  (FROM ~ TO)';
		this.items = this.buildItems();
		
		CMN.view.form.DateTimePeriodField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		var fieldId = 'valueField';
		var items=[];
		
		items.push({
			cls :'hboxLine',
			layout: {
		        type: 'hbox',
		        align:'top'
		    },
		    defaults:{margins:'0 3 0 0'},
		    
		    xtype : 'fieldcontainer',
		    items : this.buildField(fieldId,'from')
		});
		items.push({
			cls :'hboxLine',
			layout: {
		        type: 'hbox',
		        align:'top'
		    },
		    defaults:{margins:'0 3 0 0'},
		    
		    xtype : 'fieldcontainer',
		    items : this.buildField(fieldId,'to')
		});
		return items;
	},

	buildField : function(fieldId,pos){
		var valueDateFormat = this.getValueDateFormat();
		var valueTimeFormat = this.getValueTimeFormat();
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
					var timeField = container.getComponent('time'+fieldId+pos);
					var timeVal = '';
					var valueString = '';
					
					if(newValue)
						valueString = Ext.Date.format(newValue,valueDateFormat);

					timeVal = timeField.getValue();
					if (!timeVal)	timeVal = ''; 
					else timeVal = Ext.Date.format(timeVal,valueTimeFormat);
					valueField.setValue(valueString+timeVal);
                }
			},
			xtype: 'datefield',
			format : this.getDateFormat(), 
			name :  this.name+'_date',
			value : this.defaultValue,
			itemId : 'date'+fieldId+pos,
			emptyText : pos+' date',
			flex: 3
		},{
			listeners : {
				change : function(field, newValue, oldValue){ 
					var container = this.up('fieldcontainer');
					var valueField = container.getComponent(fieldId+pos);
					var dateField = container.getComponent('date'+fieldId+pos);
					var dateVal = '';
					var valueString = '';
					
					if(newValue)
						valueString = Ext.Date.format(newValue,valueTimeFormat);
					
					if(dateField){
						dateVal = dateField.getValue();
						if (!dateVal)	return; 
						dateVal = Ext.Date.format(dateVal,valueDateFormat);
						valueField.setValue(dateVal+valueString);
					}
					else
						valueField.setValue(valueString);
				}
			},
			xtype: 'timefield',
			format : this.getTimeFormat(),
			name : this.name+'_time',
			value : this.defaultValue,
			itemId : 'time'+fieldId+pos,
			emptyText : 'time',
			flex: 2
		}];
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