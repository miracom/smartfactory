var store = Ext.create('Ext.data.Store', {
	autoLoad: false,

	fields: ['text', 'menu'],
	
	proxy: {
		type: 'ajax',
		url: 'data/top_menus.json',
		reader: {
			type: 'json'
		}
	}
});

Ext.define('SmartFactory.view.common.Menu', {
	extend: 'Ext.toolbar.Toolbar',
	
	items: [
		{
			text: 'Setup',
			menu: {
				defaults: {
					height: 25
				},
				items: [
				{
					text: 'ABC',
					iconCls: 'icon1_16'
				},
				{
					text: 'Create Factory',
					iconCls: 'icon2_16'
				},
				{
					text: 'Create Material',
					iconCls: 'icon3_16'
				},
				{
					text: 'Create Flow',
					iconCls: 'icon4_16'
				},
				{
					text: 'Create Operation',
					iconCls: 'icon5_16'
				}
				]
			}
		},
		{
			text: 'Transaction',
		},
		{
			text: 'Inquiry',
			menu: Ext.create('Ext.ux.menu.StoreMenu', {
				store: store
			})
		},
		'-'
	]
});