Ext.define('plugin.UserInterface', {
	addNav : function(view, config) {
		var defaults = {
			tabConfig : {
				width : 29,
				height : 22,
				padding : '0 0 0 2px'
			}
		};

		try {
			var navView = Ext.create(view, Ext.merge(defaults, config));
			Ext.getCmp('nav').add(navView);
			var searchStore = Ext.getStore('cmn.appsearch_store');
			if(searchStore) {
				searchStore.add({
					kind : 'nav',
					key : config.itemId,
					name : config.title,
					desc : config.title,
					handler : function(searchRecord) {
						Ext.getCmp('nav').setActiveTab(navView);
					}
				});
			}
		} catch (e) {
			console.log(e);
			console.trace();
		}
	},

	addSideMenu : function(view, config) {
		try {
			var sidemenu = Ext.getCmp('sidemenu');
			var menu = Ext.create(view, config);

			sidemenu.insert(0, menu);

			var width = 6; // TODO should be more systemic.

			sidemenu.items.each(function(el) {
				width += el.getWidth();
			});

			sidemenu.setSize(width, sidemenu.getHeight());
		} catch (e) {
			// console.log(e);
		}
	},

	addContentView : function(view) {
		this.showBusy();
		var comp;
		
		if (typeof (view) === 'string') {
			comp = Ext.create(view, {
				closable : true
			});
			Ext.getCmp('content').add(comp);
		} else {
			if(view.itemId) {
				comp = Ext.getCmp('content').getComponent(view.itemId);
			} 
			
			if(!comp) {
				view.closable = true;
				comp = Ext.getCmp('content').add(view);
			}
		}
		
		comp.show();
		
		this.clearStatus();
	},

	setStatus : function(state) {
		Ext.getCmp('status').setStatus(state);
	},

	showBusy : function(o) {
		Ext.getCmp('status').showBusy(o);
	},

	clearStatus : function() {
		Ext.getCmp('status').clearStatus();
	},

	doMenu : function(menu) {
		if (menu.viewModel) {
			Ext.require(menu.viewModel, function() {
				SmartFactory.addContentView(Ext.create(menu.viewModel, {
					title : menu.text,
					tabConfig : {
						tooltip : menu.tooltip
					},
					closable : true
				}));
			});
		} else {
			SmartFactory.status.set({
				text : 'View Not Found!',
				iconCls : 'x-status-error',
				clear : true
			// auto-clear after a set interval
			});
		}
	}
});
