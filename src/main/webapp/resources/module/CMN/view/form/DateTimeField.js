/**
 * @class CMN.view.form.DateTimeField
 * **xtype : datetimex **
 * Date field와 Time field 를 함께 적용한 필드이다. 값을 변경시 숨겨져 있는 value 필드에 사용자 정의 포멧으로 변환되어 값이 적용됮다. 이벤트 및 호출자는 숨겨진 필드의 name을 호출하여 사용한다. 
 * 기본적인 속성은 Data, Time field와 동일하다.(fieldLabel, name등)
 * 
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			xtype : 'datetimex',
 *			fieldLabel : 'START',
 *			name : 'start_date',
 *   		type : 'datetime'
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *  
 * @extends Ext.form.FieldContainer
 * @author Kyunghyang
 * 
 * @cfg {String} xtype 'dateperiod' items 속성 값으로 xtype : 'dateperiod'를 선언하여 사용한다.
 * @cfg {String} type date/time/datetime 3가지 type에 따라 화면에 적용된다.
 * @cfg {String} dateFormat 화면에 표시되는 date 포멧을 설정한다.
 * default : 'Y-m-d' (2012-01-01)
 * @cfg {String} timeFormat 화면에 표시되는 time 포멧을 설정한다.
 * default : 'H-i' (01:01)
 * @cfg {String} valueDateFormat value 필드의 date 포멧을 설정한다.
 * defalut : 'Ymd' (20120101)
 * @cfg {String} valueTimeFormat value 필드의 time 포멧을 설정한다.
 * default : 'Hi' (0101)
 * @cfg {String} defaultValue 화면에 표시될때 기본 표시 일자를 설정한다.
 */
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
		this.items = this.getItems();
		
		CMN.view.form.DateTimeField.superclass.initComponent.call(this);
	},
	
	/*
	 * 초기값을 data 와 time을 분리하여 설정된 포멧으로 변경 후 각 필드에 적용한다.  
	 */
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
	/*value date의 포멧설정*/
	getValueDateFormat : function(){
		if (this.valueDateFormat)
			return this.valueDateFormat;
		return 'Ymd'; //99991231
	},
	/*value time의 포멧 설정*/
	getValueTimeFormat : function(){
		if (this.valueTimeFormat)
			return this.valueTimeFormat;
		return 'Hi'; //2301
	},
	/*date 필드의 포멧설정*/
	getDateFormat : function(){
		if (this.dateFormat)
			return this.dateFormat;
		return 'Y-m-d';// 9999-12-31
	},
	/*time 필드의 포멧설정*/
	getTimeFormat : function(){
		if (this.timeFormat)
			return this.timeFormat;
		return 'H:i'; //23:01
	},
	
	/*설정한 type에 따른 필드 생성*/
	getItems : function(){
		//var type = this.type; // date,time,datetime,datetimeto,dateto,timeto,
		var fieldId = 'valueField'; // + 1
		var items= [this.buildValue(fieldId)];
		if(this.type == 'date')			items.push(this.buildDate(fieldId,1));
		else if(this.type == 'time')	items.push(this.buildTime(fieldId,1));
		else if(this.type == 'datetime')	items.push(this.buildDate(fieldId,3),this.buildTime(fieldId,2));
		
		return items;
	},
	/*호출자에게 반환될 값의 필드 설정*/
	buildValue : function(fieldId){
		return {
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId,
			value : this.getDefaultValue()
		};
	},
	/*Date 필드 설정*/
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
	/*time 필드 설정*/
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
	}
});