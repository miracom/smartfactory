Ext.define('CMN.view.common.NavMenu', {
	extend: 'Ext.tree.Panel',
	
	rootVisible: false,
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			if(record.get('leaf')) {
				SmartFactory.addContentView({
					xtype: 'ras.resource.resource',
					title: record.get('text'),
					tabConfig : {
						tooltip: record.get('func_name'),
					},
					data: null,
					closable: true
				});
			}
		}
	},
		
	store: 'CMN.store.MenuStore'
});