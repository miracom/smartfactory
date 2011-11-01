Ext.define('SmartFactory.App', {
	addDockingNav : function(view) {
		Ext.getCmp('docked_nav').add(view);
	},
	addContentView : function(view) {
		this.showBusy();
		Ext.getCmp('content').add(view).show();
		this.clearStatus();
	},
	setStatus : function(state) {
		Ext.getCmp('statusbar').setStatus(state);
	},
	showBusy : function(o) {
		Ext.getCmp('statusbar').showBusy(o);
	},
	clearStatus : function() {
		Ext.getCmp('statusbar').clearStatus();
	},
	doMenu : function(menu) {
		if(menu.viewModel) {
			Ext.require(menu.viewModel, function() {
				SmartFactory.addContentView(Ext.create(menu.viewModel, {
					title : menu.text,
					tabConfig : {
						tooltip: menu.tooltip
					},
					closable: true
				}));
			});
		} else {
			SmartFactory.setStatus({
				text: 'View Not Found!',
				iconCls: 'x-status-error',
				clear: true // auto-clear after a set interval
			});
		}
	}
});