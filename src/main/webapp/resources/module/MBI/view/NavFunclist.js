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
	
	cls: 'report-list',
	//itemSelector: '.mbi_funclist_item',
	itemSelector: '.report-list-item',
	overItemCls: 'report-list-item-hover',
	
	tpl:'<tpl for="."><div class="report-list-item">[ {func_id} - {func_code} ]</BR>: {func_name1}</div></tpl>'
});