/**
 * @class MBI.view.form.builder.ConditionBuilder
 * @author kyunghyang.
 * 설정 벙보로 condition 속성을 설정하여 조건 컨트롤러들을 생성한다.
 * 
 *   @example
 *	 Ext.define('BaseFomeTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *		
 *	 	initComponent : function() {
 *			this.callParent();
 *			this.items : [this.zcondition],
 *		},
 *
 *	 	zcondition : function(){
 *			return Ext.create('MBI.view.form.builder.ConditionBuilder',{
 *				formInfoData : this.store.data,
 *				funcId : this.funcId,
 *				langFlag : this.langFlag,
 *				client : this,
 *				viewHandler : this.onView 
 *			});
 *		}
 *	 });
 * 
 * @cfg {Object} formInfoData Chart의 구성요소 설정 정보
 * @cfg {Object} funcId function id
 * @cfg {Number} langFlag 표시되는 언어 (1:영어/2:한국어/3:기타언어)
 * @cfg {String} client 호출자 컨포넌트 'this' 설정
 * @cfg {Function} viewHandler view버튼 클릭시 선언한 이벤트 함수
 */
Ext.define('MBI.view.form.builder.ConditionBuilder',{
	constructor : function(config) {
		Ext.apply(this, config);
	},
	
	buildCondition : function(){
		var fieldSet = Ext.create('MBI.view.form.builder.FieldBuilder',{
        	data : this.formInfoData.get(0).data.mapconGenNt,
        	facId : this.facId
        }).getFieldSet();

		return Ext.create('Ext.form.Panel',{

			bodyStyle : 'padding:5px',

			defaults : {
				labelAlign : 'top'
			},
			
	        layout: {
	        	 type: 'vbox',
	        	 align : 'stretch'	        		 
	        },
		    items: fieldSet,
		    buttons : [ {
				text : 'View',
				client : this.client,
				viewHandler : this.viewHandler,
				handler : this.handlerButtonView
			}, {
				text : 'Reset',
				handler : function() {
					this.up('form').getForm().reset();
				}
			} ]
		});
	},
	
	/**
	 * view버튼 클릭시 선언한 이벤트 함수를 호출
	 */
	handlerButtonView : function() {
		var form = this.up('form');
		this.viewHandler.apply(this.client, [form.getValues()]);
	}
});