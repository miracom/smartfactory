/*include할 class를 선언한다.*/
Ext.require('MBI.view.common.BaseFormBuilder');

/**
 * @class MBI.view.common.NavFormlist
 * Form Design Function List 표시
 * 
 * **include** : MBI.view.common.BaseFormBuilder
 * 
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 */
Ext.define('MBI.view.common.NavFormlist', {
	extend : 'Ext.panel.Panel',

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

    /*
     * Get the function list view from this items.
     * @return {Ext.view.View} listView
     */
	getListView : function() {
		if(!this.listView)
			this.listView = this.down('[itemId=list]');
		return this.listView;
	},
	
    /*
     * Get the refresh button component.
     * @return {Ext.button.Button} refreshButton
     */
	getRefreshButton : function() {
		if(!this.refreshButton)
			this.refreshButton = this.down('[itemId=refresh]');
		return this.refreshButton;
	},
	
    /*
     * Get the clear button component.
     * @return {Ext.button.Button} clearButton
     */
	getClearButton : function() {
		if(!this.clearButton)
			this.clearButton = this.down('[itemId=clear]');
		return this.clearButton;
	},
	
    /*
     * Get the model checkbox component.
     * @return {Ext.form.field.Checkbox} modelCheck
     */
	getModelCheck : function() {
		if(!this.modelCheck)
			this.modelCheck = this.down('[itemId=model]');
		return this.modelCheck;
	},
	
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