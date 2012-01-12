Ext.require('MBI.view.common.BaseFormBuilder');

/**
 * @class MBI.controller.MBIController
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 * Form Design Function List 표시
 * 
 * **include** : MBI.view.common.BaseFormBuilder
 * @cfg {String[]} tbar refresh,clear등 이벤트 버튼설정
 * @cfg {String[]} items 표시할 ListView설정
 * @cfg {String} itemId 외부참조의 편리성을 위해 포든 item에 itemId를 부여하여 한다.
 */
Ext.define('MBI.view.common.NavFormlist', {
	extend : 'Ext.panel.Panel',

	/**
	 * @property initComponent
	 * 실행시 초기설정
	 */
	initComponent : function() {
		this.callParent();

		var self = this;
		
		this.on('render', function() {
			self.getListView().store.load();
		});

		this.getRefreshButton().on('click', function() {
			self.getListView().store.load();
		});
		
		this.getClearButton().on('click', function() {
			self.getListView().store.removeAll(false);
		});

		this.getListView().on('itemclick', function(view, record) {
			var form = MBI.view.common.BaseFormBuilder.buildForm(record);
			if (self.getModelCheck().getValue() == true) {
				form = {
					xtype : 'mbi.formdesign',
					title : 'Form-' + record.get('func_id'),
					data : record,
					closable : true
				};
			}
			SmartFactory.addContentView(form);
		});
	},

	/**
	 * getXXX : 설정된 itemId의 component를 반환한다. 
	 */
	getListView : function() {
		if(!this.listView)
			this.listView = this.down('[itemId=list]');
		return this.listView;
	},
	
	getRefreshButton : function() {
		if(!this.refreshButton)
			this.refreshButton = this.down('[itemId=refresh]');
		return this.refreshButton;
	},
	
	getClearButton : function() {
		if(!this.clearButton)
			this.clearButton = this.down('[itemId=clear]');
		return this.clearButton;
	},
	
	getModelCheck : function() {
		if(!this.modelCheck)
			this.modelCheck = this.down('[itemId=model]');
		return this.modelCheck;
	},
	
	/**
	 * @property tbar
	 * 상단부 bar 부분에 refresh,clear,model선택 기능버튼을 설정한다.
	 */
	tbar : [ {
		cls : 'navRefreshBtn',
		itemId : 'refresh'
	}, {
		cls : 'navClearBtn',
		itemId : 'clear'
	}, {
		xtype : 'checkbox',
		boxLabel : 'Model',
		itemId : 'model'
	} ],
	
	/**
	 * @property items
	 * 화면에 표시될 item을 설정한다.
	 * function list 표시
	 */
	items : [ {
		xtype : 'dataview',
		store : 'MBI.store.SecfundefNt',
		autoScroll : true,
		itemId : 'list',
		cls : 'report-list',
		itemSelector : '.report-list-item',
		overItemCls : 'report-list-item-hover',

		tpl : [ '<tpl for=".">', 
		        '<div class="report-list-item">', 
		        '[ {func_id}/{func_patn} - {func_code} ]</BR>', 
		        ': {func_name1}</div></tpl>' 
		      ]
	} ]
});