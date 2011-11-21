Ext.define('MBI.view.NavFormlist', {
	extend: 'Ext.view.View',
	
	store: 'MBI.store.SecfundefNt',
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			//SmartFactory.addContentView('MBI.view.FormDesign');
			SmartFactory.addContentView({
				xtype : 'mbi.formdesign',
				title : 'Form-' + record.get('func_id'),
				data : record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'operation-list',
	itemSelector: '.mbi_formlist_item',
	overItemCls: 'operation-list-item-hover',
	
	tpl:'<tpl for="."><div class="mbi_formlist_item">{func_id} - {func_code}</div></tpl>'
});