Ext.define('SmartFactory.view.common.NavMenu', {
	extend: 'Ext.tree.Panel',
	
	rootVisible: false,
	
	listeners: {
		itemclick: function(view, record, item, index, e, opt) {
			if(record.get('leaf')) {
				SmartFactory.addContentView({
					xtype: 'ras.resource.resource',
					title: record.get('text'),
					tabConfig : {
						tooltip: record.raw.func_name,
					},
					data: null,
					closable: true
				});
			}
		}
	},
		
	store: 'common.MenuStore'
});