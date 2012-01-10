Ext.define('CMN.view.viewport.West', {
	extend : 'Ext.tab.Panel',

	alias : 'widget.viewport.west',

	id : 'nav',
	
	cls : 'nav',

	tabPosition : 'bottom',

	listeners : {
		tabchange : function(tab, card) {
			tab.setTitle(card.title);
		},
		add : function(tab, card) {
			if(tab.items.length < 1)
				tab.setTitle(card.title);
		},
		remove : function(tab, card) {
			if(tab.items.length == 0)
				tab.setTitle(tab.initialConfig.title);
		}
	}
});
