Ext.define('ARC.view.TaskMenu', {
	extend: 'Ext.view.View',
	store: 'ARC.store.MenuStore',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {
			var list = Ext.create('ARC.view.task.TaskList', {
				title: 'Archive Task List',
				closable: true
			});
			SmartFactory.addContentView(list);
		}
	},
	
	autoScroll: true,
	
	cls: 'report-list',
	itemSelector: '.report-list-item',
	overItemCls: 'report-list-item-hover',
	tpl:'<tpl for="."><div class="report-list-item">{id} - {name}</div></tpl>'		
});