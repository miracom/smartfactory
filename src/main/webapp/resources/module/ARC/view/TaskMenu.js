Ext.define('ARC.view.TaskMenu', {
	extend: 'Ext.view.View',
	store: 'ARC.store.MenuStore',
	
	listeners: {
		render: function(view) {
			view.store.load();
		},
		itemclick: function(view, record, item, index, e, opt) {
			var list = null;
			if(record.data['name'] == 'DataGrid')
			{
				//grid
				list = Ext.create('ARC.view.test.GridTest', {
					title: 'Grid Test',
					closable: true
				});
			}
			else
			{
				list = Ext.create('ARC.view.task.TaskList', {
					title: 'Archive Task List',
					closable: true
				});
			}
			
			SmartFactory.addContentView(list);
		}
	},
	
	autoScroll: true,
	
	cls: 'archive-list',
	itemSelector: '.archive-list-item',
	overItemCls: 'archive-list-item-hover',
	tpl:'<tpl for="."><div class="archive-list-item">{id} - {name}</div></tpl>'		
});