Ext.define('MBI.view.NavFunclist', {
	extend: 'Ext.view.View',
	
	store: 'MBI.store.SecfundefNt',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {
			SmartFactory.addContentView({
				xtype : 'mbi.baselayoutview',
				title : record.get('func_name1'),
				funcData : record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'operation-list',
	itemSelector: '.mbi_funclist_item',
	overItemCls: 'operation-list-item-hover',
	
	tpl:'<tpl for="."><div class="mbi_funclist_item">[FORM:{func_id} - {func_code}]</div></tpl>'
});