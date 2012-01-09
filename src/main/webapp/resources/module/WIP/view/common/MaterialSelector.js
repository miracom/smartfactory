Ext.define('WIP.view.common.MaterialSelector', {
	/*
	 * 부모 클래스를 정의한다. 
	 */
	extend : 'Ext.panel.Panel',
	
	/*
	 * plugins을 설정한다. 
	 */
	plugins : [],
	
	/*
	 * common 뷰인 경우에는 Alias를 정의한다.
	 */
	alias : 'widget.wip_material_selector',
	
	/*
	 * 스타일을 적용한다.
	 */
	cls : 'nav supplement',
	bodyStyle : 'padding:5px',

	/*
	 * 부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다.
	 */
	flex : 1,
	width : 180,
	
	/*
	 * 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 
	 * 단, 복잡한 items, docked items 등은 initComponent에서 등록을 권장한다.
	 */
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	defaults : {
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		labelAlign : 'top'
	},

	/*
	 * Init Component 메쏘드를 오버라이드 한다.
	 * 
	 * 1. items (정적인 컴포넌트)를 등록한다.
	 * 2. docked item들을 등록한다.
	 * 3. callParent()를 호출한다.
	 * 4. 동적인 컴포넌트와 리스너들을 등록한다.
	 */
	initComponent : function() {
		/*
		 * 정적인 컴포넌트들을 등록한다.
		 * Docked Item들을 등록한다.
		 */
		this.items = [this.zfilter, this.zviewmode];
		this.bbar = [ this.zcount, this.zsearch, this.zrefresh, this.zexport ];
		
		/*
		 * 부모의 컴포넌트 초기화 기본 로직을 호출한다.
		 */
		this.callParent();
		
		/*
		 * 부가적인 작업을 한다.
		 * - 동적인 컴포넌트 추가
		 * - 리스너 등록
		 */
		this.list = this.down('[itemId=list]');
		
	},
	
	zfilter : {
		xtype : 'fieldset',
		itemId : 'filters',
		layout : 'anchor',
		defaults : {
			labelWidth : 140,
			labelSeparator : '',
			boxLabelAlign : 'after',
			anchor : '100%'
		},
		items : [ {
			xtype : 'codeview',
			labelWidth : 100,
			fieldLabel : 'Material Type',
			itemId : 'material_type',
			codeviewName : 'MaterialType',
			txtFieldFlex : [1],
			txtFieldName : ['GROUP_NAME'],
			filter : [ {
				property : 'factory',
				value : SmartFactory.login.factory()
			} ]
		}, {
			xtype : 'checkbox',
			fieldLabel : 'Include Deleted Material',
			itemId : 'include_deleted'
		}, {
			xtype : 'checkbox',
			fieldLabel : 'Include Deactive Material',
			itemId : 'include_deactive'
		} ]
	},
	
	zviewmode : {
		xtype : 'fieldset',
		itemId : 'viewmode',
		layout : 'auto',
		defaults : {
			xtype : 'radio',
			labelWidth : 140,
			labelSeparator : '',
			boxLabelAlign : 'after'
		},
		items : [ {
			fieldLabel : 'Last active version'
		}, {
			fieldLabel : 'Version to tree structure'
		}, {
			fieldLabel : 'All version'
		} ]
	},

	zlist : {
		xtype : 'treeview',
		itemId : 'list',
		flex : 1,
		autoScroll : true,
		store : '',
		rootVisible : false
	},

	zcount : {
		xtype : 'textfield',
		disabled : true,
		width : 30
	}, 
	
	zsearch : {
		xtype : 'textfield',
		flex : 1
	}, 
	
	zrefresh : {
		xtype : 'button',
		width : 18
	}, 

	zexport : {
		xtype : 'button',
		width : 18
	}
});