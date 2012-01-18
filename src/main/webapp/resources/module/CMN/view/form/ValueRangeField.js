/**
 * @class CMN.view.form.ValueRangeField
 * **xtype : valuerange **
 * 값의 범위를 설정하는 필드이다.
 * 기본적인 속성은 textfield와 동일하다.(fieldLabel, name등) 
 * **Note :** 입력된 값을 읽어올때 설정한 name으로 배열이 형태로 반환되며 name[0]은 최소값, name[1]은 최대값을 가진다. 
 *  
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			xtype : 'valuerange',
 *			fieldLabel : 'HIGHT',
 *			name : 'HIGHT',
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *  
 * @extends Ext.form.FieldContainer
 * @author Kyunghyang
 * 
 * @cfg {String} xtype 'valuerange' items 속성 값으로 xtype : 'valuerange' 를 선언하여 사용한다.
 */
Ext.define('CMN.view.form.ValueRangeField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.valuerange',
	
	cls :'hboxLine',
	
	layout: {
        type: 'hbox',
        align:'top'
    },
	
    defaults:{margins:'0 3 0 0'},
	
    constructor : function(config) {
    	CMN.view.form.ValueRangeField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.fieldLabel = this.fieldLabel + '  (FROM ~ TO)';
		this.items = this.buildItems();
		CMN.view.form.ValueRangeField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		var fieldId = 'valueField'; // + 1
		var items= [];
		items.push(this.buildField(fieldId,'from'));
		items.push({html : "~"});
		items.push(this.buildField(fieldId,'to'));
		return items;
	},
	buildField : function(fieldId,pos){
		return {
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId+pos,
			value : this.defaultValue,
			flex: 1
		};
	}
});