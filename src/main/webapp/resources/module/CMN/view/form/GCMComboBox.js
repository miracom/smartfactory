/**
 * @class CMN.view.form.GCMComboBox
 * GCM에 정의된 code를 조회하여 화면에 표시한다.
 * combobox의 기본속성을 가진다.
 * 
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			labelAlign : 'top',
 *			fieldLabel : 'GROUP NO',
 *			name : 'group_no',
 *			queryMode : 'local',
 *			displayField : 'GROUP_NO',
 *			valueField : 'GROUP_NO',
 *			tableName : 'TESTTABLE',
 *			value : '' //default value 
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *
 * @extends Ext.form.field.ComboBox	
 * @author Kyunghyang
 * 
 * @cfg {String} displayField 화면에 표시할 값 및 조회할 컬럼명
 * @cfg {String} valueField 호출시 적용되는 값 및 조회할 컬럼명
 * @cfg {String} tableName 조회할 테이블 명
 */
Ext.define('CMN.view.form.GCMComboBox', {
	extend : 'Ext.form.field.ComboBox',

	constructor : function(config) {
		
		// tableName, valueField, displayField + fieldsInfo
		config = Ext.applyIf(config, {
			store : this.buildStore(config),
		});
		CMN.view.form.GCMComboBox.superclass.constructor.call(this, config);
	},

	buildStore : function(config) {
		//TODO proxy configs 변경
		//TODO MBI 모듈 디펜던시를 제거해야 합니다.
		return Ext.create('Ext.data.Store',{
			autoLoad : true,
			fields : [config.displayField ,config.valueField],
			proxy : {
				type : 'ajax',
				url : 'module/MBI/data/tbldat_nt.json',
				extraParams : {
					tbl_code : config.tableName,
					params :''
				},
				reader : {
					type : 'json'
				}
			}
		});
	}
});