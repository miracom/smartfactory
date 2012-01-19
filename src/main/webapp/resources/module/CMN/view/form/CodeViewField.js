/**
 * @class CMN.view.form.CodeViewField
 * **xtype : codeview **
 * GCM 및 특정 Table의 코드검색을 위한 필드이다. 필드의 버튼을 클릭 하면 해당 정보를 팝업으로 표시하며 팝업의 code를 선택하면 필드에 값이 적용된다.
 * 또는 필드에 값을 입력 후 코드버튼을 클릭하면 입력한 검색어와 관련된 code를 팝업에 표시한다.
 * 
 * 코드뷰필드를 선언하기 전에 SmartFactory.codeview.register(코드뷰명,{각 속성 정의})을 선언하여 codeview의 기본정보를 등록한다.
 * 자주 사용하는 codeview는 각 모듈의 컨트롤러 onViewportRendered에 선언하여 사용한다. 
 * **NOTE**  SmartFactory.codeview.register() 필수 선언 항목
 * - gcmdefuse : true/false  조회시 GCM에 선언되 칼럼명의 사용여무를 정의한다. default : true  
 * - viewType : 'gcm/table' 조회시 GCM Table인지 특정 Table 조회인지를 설정한다. 
 * 
 * 특정 Table의 코드뷰에 대한 예제이다.(등록시 title, table,selects, columns를 선언하였더라도 field선언시 재선언하여 사용할 수 있다)
 *   @example
 *	 Ext.define('CodeViewTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Code View Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *			
 *	     	SmartFactory.codeview.register('Material', {
 *				viewType : 'table', 
 *				title : 'Select Material',
 *				selects : [ 'FACTORY', 'MAT_ID', 'MAT_VER', 'MAT_DESC' ],
 *				table : 'MWIPMATDEF',
 *				columns : [ {
 *					header : 'Material',
 *					dataIndex : 'MAT_ID',
 *					flex : 2
 *				}, {
 *					header : 'Version',
 *					dataIndex : 'MAT_VER',
 *					flex : 1
 *				}, {
 *					header : 'Description',
 *					dataIndex : 'MAT_DESC',
 *					flex : 3
 *				} ],
 *			});
 *		},
 *	 	items : [{
 *			xtype : 'codeview',
 *			codeviewName : 'Material',
 * 			bInitFilter: true,
 *			name : 'MAT_ID',
 *			fieldLabel : 'Product ID',
 *			txtFieldName : [ 'MAT_ID', 'MAT_VER' ],
 *			txtFieldFlex : [2,1],
 *  		filter : [ {
 *				property : 'factory',
 *				value : SmartFactory.login.factory()
 *			} ],
 *	     } ],
 *	 	renderTo : Ext.getBody()
 *	 });
 *
 * GCM Table의 코드뷰에 대한 예제이다.(등록시 title, table,selects, columns를 선언하였더라도 field선언시 재선언하여 사용할 수 있다)
 *   @example
 *	 Ext.define('CodeViewTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Code View Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *			
 *	     	SmartFactory.codeview.register('MaterialType', {
 *				viewType : 'gcm', 
 *				title : 'Select Material Type',
 *				selects : [ 'FACTORY', 'GROUP_NAME', 'MODEL_DESC_S' ]
 *				table : 'MATERIAL_GRP_2', //GCM의 Table 컬럼에 정의되어있는 Table명
 *				columns : [ {
 *					header : 'Material Type',
 *					dataIndex : 'GROUP_NAME',
 *					flex : 2
 *				}, {
 *					header : 'Description',
 *					dataIndex : 'MODEL_DESC_S',
 *					flex : 3
 *				} ],
 *			});
 *		},
 *	 	items : [{
 *			xtype : 'codeview',
 *			codeviewName : 'MaterialType',
 *			fieldLabel : 'MATERIAL TYPE',
 *			txtFieldName : ['GROUP_NAME'],
 *			name : 'TEST_ID',
 *	     }],
 *	 	renderTo : Ext.getBody()
 *	 });
 *
 * GCM Table의 코드뷰에 대한 상세설정 예제이다.
 * GCM Table 코드뷰는 register한번 등록된 coview를 여러 필드에서 속성을 재선언하여 사용할 수 있다.   
 * 
 *   @example
 *	 Ext.define('CodeViewTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Code View Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *			
 *	     	SmartFactory.codeview.register('gcmcodeview', {
 *				viewType : 'gcm', 
 *			});
 *		},
 *	 	items : [{
 *			xtype : 'codeview',
 *			codeviewName : 'gcmcodeview',
 *			title : 'Select Material Type',
 *			selects : [ 'FACTORY', 'GROUP_NAME', 'MODEL_DESC_S' ]
 *			table : 'MATERIAL_GRP_2',
 *			fieldLabel : 'MATERIAL TYPE',
 *			txtFieldName : ['GROUP_NAME'],
 *			columns : [ {
 *				header : 'Material Type',
 *				dataIndex : 'GROUP_NAME',
 *				flex : 2
 *			}, {
 *				header : 'Description',
 *				dataIndex : 'MODEL_DESC_S',
 *				flex : 3
 *			} ],
 *			name : 'TEST_ID',
 *	     },{
 *			xtype : 'codeview',
 *			codeviewName : 'gcmcodeview',
 *			title : 'Abnarmal Type',
 *			selects : [ 'FACTORY', 'ABNO_CODE', 'DESC' ]
 *			table : 'ABNORMAL',
 *			fieldLabel : 'ABNORMAL',
 *			txtFieldName : ['ABNORMAL'],
 *			columns : [ {
 *				header : 'ABNORMAL',
 *				dataIndex : 'ABNO_CODE',
 *				flex : 2
 *			}, {
 *				header : 'Description',
 *				dataIndex : 'DESC',
 *				flex : 3
 *			} ],
 *			name : 'ABNO_CODE',
 *	     }],
 *	 	renderTo : Ext.getBody()
 *	 });
 *
 * GCM Table의 코드뷰에 대한 기본설정 예제이다.
 * 
 *   @example
 *	 Ext.define('CodeViewTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Code View Test',
 *	 	items : [{
 *			xtype : 'codeview',
 *			codeviewName : 'BaseCodeView',
 *			title : 'Select Test ID',
 *			table : 'TESTTABLE',
 *			fieldLabel : 'TEST ID',
 *			name : 'TEST_ID',
 *	     } ],
 *	 	renderTo : Ext.getBody()
 *	 });
 * @extends Ext.form.FieldContainer
 * @author Kyunghyang
 * 
 * @cfg {String} xtype 'codeview' items 속성 값으로 xtype : 'codeview'를 선언하여 사용한다.
 * @cfg {String} codeviewName SmartFactory.codeview.register등록시 선언명을 설정한다. 등록된 codeview중 선언된 명으로 검색하여 설정값을 적용한다.
 * @cfg {Boolean} bInitFilter 필드의 값을 코드뷰의 조회조건 포함여부를 설정한다.
 * default : true
 * @cfg {String} fieldLabel 화면에 표시되는 field의 라벨을 설정한다.
 * @cfg {String[]} txtFieldName 화면에 표시되는 field의 이름을 설정한다. 중복 선언이 제한되며 값에 대한 이벤트 적용시 사용된다.
 * @cfg {Number[]} txtFieldFlex 화면에 표시되는 field가 차지하는 너비의 비율을 설정한다. field가 하나일 경우는 [1]이 적용된다.
 * default : [1] 
 * @cfg {String} name codeview field의 이름을 설정한다. 조회이벤트시 사용되며 중복선언이 제한된다.
 * @cfg {String} table (override) 조회시 필요한 테이블명을 설정한다. codeview 등록 또는 field 선언시 필수항목이다.
 * @cfg {String} title (override) codeview팝업의 제목을 설정한다. 
 * default : 'Code Select'
 * @cfg {String[]} selects (override) 조회시 필요한 컬럼명을 설정한다. 
 * default : ['KEY_1','DATA_1']
 * @cfg {Object[]} columns (override) 팝업의 grid의 컬럼속성을 설정한다. 
 * default : [{header : 'ITEM',dataIndex : 'KEY_1',flex : 2}, {header : 'DESC',dataIndex : 'DATA_1',flex : 3} ],
 * @cfg {String} refGcmCol 코드검색시 다른 필드의 값을 조회 조건에 추가하고자 할때 해당 컬럼명을 설정한다.   
 * @cfg {String} refField 코드검색시 다른 필드의 값을 조회 조건에 추가하고자 할때 해당 필드의 name을 설정한다.
 * @cfg {Object[]} filter 코드뷰의 조회조건에 추가로 포함할 조건정보를 설정한다.
 */
Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.FieldContainer',

	alias: 'widget.codeview',

	cls :'hboxLine',

	layout: {
        type: 'hbox',
        align:'top'
    },

    defaults:{margins:'0 3 0 0'},
    
    constructor : function(config) {
    	Ext.applyIf(this,{
    		filter : [],
    		txtFieldName : ['KEY_1'],
    		txtFieldFlex : [ 1 ],
    		bInitFilter: true
    	});
    	CMN.view.form.CodeViewField.superclass.constructor.apply(this, arguments);
	},
	
	initComponent : function() {
		this.callParent();
	
		this.add(this.buildTxtfield());
		this.add(this.buildSerach());
	},

	/*field를 정의한다.*/
	buildTxtfield : function()
	{
		var items = [];
		var txtField = this.txtFieldName;
		var txtWidth = this.txtFieldFlex;
		
		//다중 조건또는 표시일 경우
		if(txtField instanceof Array) {
			for(var i in txtField) {
				var fieldName = txtField[i];
				if(this.name instanceof Array)
					fieldName = this.name[i];
				else if(this.name && i<1)
					fieldName = this.name;
				
				items.push({
					listeners : {
						specialkey : function(textfield, e) {
		                    if (e.getKey() != e.ENTER)
		                    	return;
		                    var fieldset = this.up('fieldcontainer');
		                    SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
						}
					},
					xtype: 'textfield',
					//name: txtField[i],
					name : fieldName,
					itemId: txtField[i],
					flex: txtWidth[i]
				});
			}
		}
		//단일 조회
		else {
			var fieldName = txtField;
			if (this.name) fieldName = this.name;
			items.push({
				listeners : {
					specialkey : function(textfield, e) {
	                    if (e.getKey() != e.ENTER)
	                    	return;
	                    var fieldset = this.up('fieldcontainer');
	                    SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
	            	}
				},
				xtype: 'textfield',
				name: fieldName,
				itemId: txtField,
				flex: txtWidth
			});
		}
		
		return items;
	},
	
	/*[...]버튼을 정의하고 클릭시 코브뷰 팝업을 호출한다.*/
	buildSerach : function()
	{
		return {
			xtype: 'button',
			iconCls:'btnCodeView',
			handler: function(){
				var fieldset = this.up('fieldcontainer');
            	//var refVal = fieldset.up('form').getValues();
				SmartFactory.codeview.show(fieldset.codeviewName, fieldset.filter, fieldset.selectedCallback, fieldset);
			}
		};
	},
	
	/*코드뷰에서 선택시 해당 코드값을 필드에 표시한다.*/
	selectedCallback : function(fieldset, record) {
		var codeview = SmartFactory.codeview.get(fieldset.codeviewName);
		var txtField = codeview.client.txtFieldName;
		
		if(txtField instanceof Array) {
			for(var i in txtField) 
			{	
				var field = fieldset.getComponent(txtField[i]);
				
				if(field && field.itemId == txtField[i])
				{
					field.setRawValue(record.get(txtField[i]));
				}
			}
		} else {
			var field = fieldset.getComponent(txtField);

			if(field && field.itemId == txtField)
			{
				field.setRawValue(record.get(txtField));
			}
		}
	}
});

