Ext.define('SmartFactory.App', {
	addDockingNav : function(view) {
		Ext.getCmp('viewport.west').add(view);
	},
	addContentView : function(view) {
		this.showBusy();
		Ext.getCmp('viewport.center').add(view).show();
		this.clearStatus();
	},
	setStatus : function(state) {
		Ext.getCmp('viewport.south').setStatus(state);
	},
	showBusy : function(o) {
		Ext.getCmp('viewport.south').showBusy(o);
	},
	clearStatus : function() {
		Ext.getCmp('viewport.south').clearStatus();
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