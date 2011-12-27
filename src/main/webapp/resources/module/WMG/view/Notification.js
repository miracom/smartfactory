Ext.define('WMG.view.Notification', {
	extend : 'Ext.panel.Panel',
	plugins : [Ext.create('CMN.plugin.Supplement')],

	supplement : {
		xtype : 'form',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [{
			xtype : 'textfield',
			fieldLabel : 'Sender',
			name : 'sender'
		}] 
	},
	
	items : [{
		xtype : 'dataview', 
		store: 'WMG.store.NotificationStore',
		
		listeners: {
			render: function(view) {
			}
		},
		
		autoScroll: true,
		
		cls: 'notification-list',
		itemSelector: '.notification-list-item',
		overItemCls: 'notification-list-item-hover',
		tpl:'<tpl for="."><div class="notification-list-item">{title} - {message}</div></tpl>'
	}]
});