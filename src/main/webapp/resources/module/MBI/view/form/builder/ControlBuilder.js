/**
 * @class MBI.view.form.builder.ControlBuilder
 * @extends Ext.toolbar.Toolbar
 * @author Kyunghyang
 * FormDesign에서 설정한 정보로 이벤트 버튼을 생성한다.
 * 
 *   @example
 *	 Ext.define('BaseFomeTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *		
 *	 	initComponent : function() {
 *			this.callParent();
 *			this.items : [this.zcontrol],
 *		},
 *
 *	 	zcontrol : function(){
 *			return Ext.create('MBI.view.form.builder.ControlBuilder'),{
 *					formInfoData : this.store.data,
 *					});
 *   });
 *   
 * @cfg {Object} formInfoData Chart의 구성요소 설정 정보
 */
Ext.define('MBI.view.form.builder.ControlBuilder',{
	/*부모 클래스를 정의한다.*/
	extend : 'Ext.toolbar.Toolbar',
	
	/* 부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다. */
	dock : 'bottom',
	cls : 'x-toolbar-footer-docked-bottom',

	/* 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 단, 복잡한 items, docked
	 items 등은 initComponent에서 등록을 권장한다. */
	layout : {
		type : 'hbox'
	},
	
	defaults : {
	},
	
	/*
	 * Init Component 메쏘드를 오버라이드 한다.
	 * 
	 * 1. items (정적인 컴포넌트)를 등록한다. 2. docked item들을 등록한다. 3. callParent()를 호출한다.
	 * 4. 동적인 컴포넌트와 리스너들을 등록한다.
	 */
	initComponent : function() {

		this.items = [this.zexport,{xtype : 'tbfill'},this.zupdate, this.zdelete, this.zclose];
		this.callParent();
		
		//var self = this;
	},
	
	zexport : {
		xtype : 'exporterbutton',
		itemId : 'export',
		floating:false
	},
	zupdate : {
		xtype : 'button',
		width : 80,
		text : 'Update',
		itemId : 'update'
	},
	zdelete : {
		xtype : 'button',
		width : 80,
		text : 'Delete',
		itemId : 'delete'
	}, 
	zclose : {
		xtype : 'button',
		width : 80,
		text : 'Close',
		itemId : 'close'
	}
});

