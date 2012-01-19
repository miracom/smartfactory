/**
 * @class CMN.view.form.DateTimePeriodField
 * **xtype : datetimeperiod **
 * 기간 조회시 사용되는 필드이다.
 * Date field와 Time field 를 함께 적용한 필드이다. 값을 변경시 숨겨져 있는 value 필드에 사용자 정의 포멧으로 변환되어 값이 적용됮다. 이벤트 및 호출자는 숨겨진 필드의 name을 호출하여 사용한다. 
 * 기본적인 속성은 Data, Time field와 동일하다.(fieldLabel, name등)
 * **Note :** 입력된 값을 읽어올때 설정한 name으로 배열이 형태로 반환되며 name[0]은 시작일시, name[1]은 종료일시를 가진다.
 * 
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			xtype : 'datetimeperiod',
 *			fieldLabel : '생성일시',
 *			name : 'create_time',
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *  
 * @extends Ext.form.FieldContainer
 * @author Kyunghyang
 * 
 * @cfg {String} xtype 'datetimeperiod' items 속성 값으로 xtype : 'datetimeperiod 선언하여 사용한다.
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