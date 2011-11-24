Ext.define('RAS.view.NavResource', {
	extend: 'Ext.view.View',
	
	store: 'RAS.store.ResourceListStore',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {
			SmartFactory.addContentView({
				xtype: 'ras.resource.resource',
				title: 'Resource-' + record.get('resource_id'),
				data: record,
				closable: true
			});
		}
	},
	
	autoScroll: true,
	
	cls: 'resource-list',
	itemSelector: '.resource-list-item', //itemselector로 div 지정 
	overItemCls: 'resource-list-item-hover',
	tpl:'<tpl for="."><div class="resource-list-item">{resource_id} - {desc}</div></tpl>'
});