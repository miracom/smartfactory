Ext.require('MBI.view.form.builder.BaseFormBuilder');

Ext.define('MBI.view.FunctionListView', {
	extend: 'Ext.view.View',
	
	store: 'MBI.store.SecfundefNt',
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			var form = MBI.view.form.builder.BaseFormBuilder.buildForm(record);
			if(this.viewflag.value == true){
				form = {
						xtype : 'mbi.formdesign',
						title : 'Form-' + record.get('func_id'),
						data : record,
						closable: true
					};
			}
			SmartFactory.addContentView(form);
		}
	},
	
	autoScroll: true,
	
	cls: 'report-list',
	//itemSelector: '.mbi_funclist_item',
	itemSelector: '.report-list-item',
	overItemCls: 'report-list-item-hover',
	
	tpl:'<tpl for="."><div class="report-list-item">[ {func_id}/{func_patn} - {func_code} ]</BR>: {func_name1}</div></tpl>'
});