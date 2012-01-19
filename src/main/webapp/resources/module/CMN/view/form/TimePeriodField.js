/**
 * @class CMN.view.form.TimePeriodField
 * **xtype : timeperiod **
 * 시간별 기간 조회시 사용되는 필드이다.
 * 값을 변경시 숨겨져 있는 value 필드에 사용자 정의 포멧으로 변환되어 값이 적용됮다. 이벤트 및 호출자는 숨겨진 필드의 name을 호출하여 사용한다.
 * 기본적인 속성은 Time field와 동일하다.(fieldLabel, name등) 
 * **Note :** 입력된 값을 읽어올때 설정한 name으로 배열이 형태로 반환되며 name[0]은 시작시각, name[1]은 종료시각를 가진다. 
 *  
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			xtype : 'timeperiod',
 *			fieldLabel : '생성일자',
 *			name : 'create_time',
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *  
 * @extends Ext.form.FieldContainer
 * @author Kyunghyang
 * 
 * @cfg {String} xtype 'timeperiod' items 속성 값으로 xtype : 'timeperiod'를 선언하여 사용한다.
 * @cfg {String} format 화면에 표시되는 time 포멧을 설정한다.
 * default : 'H-i' (01:01)
 * @cfg {String} valueFormat value 필드의 time 포멧을 설정한다.
 * defalut : 'Hi' (0101)
 * @cfg {String} value 화면에 표시될때 기본 표시 일자를 설정한다.
 */
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
		items.push(this.buildField(fieldId,'from'));
		items.push({html : "~"});
		items.push(this.buildField(fieldId,'to'));
		console.log(items);
		return items;
	},
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