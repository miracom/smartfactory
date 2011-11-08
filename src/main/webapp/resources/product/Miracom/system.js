var Miracom = Miracom || (function() {
	var modules_order = [];
	var modules = {};

	function getModules() {
		return modules;
	}

	function registerModule(module_name, controllers) {
		if (modules[module_name])
			return;

		modules[module_name] = controllers;
		modules_order.push(module_name);

		Ext.Loader.setPath(module_name, 'module/' + module_name);
	}

	function getAllControllers() {
		return modules_order.reduce(function(joined, module) {
			return joined.concat(modules[module]);
		}, []);
	}

	return {
		modules : getModules,
		register : registerModule,
		controllers : getAllControllers,
		addDockingNav : function(view) {
			Ext.getCmp('docked_nav').add(view);
		},
		addSystemMenu : function(menu) {
			var system_menu = Ext.getCmp('system_menu');
			system_menu.add(menu);
			var width = 6;
			system_menu.items.each(function(el) {
				width += el.getWidth();
			});
			system_menu.setSize(width, system_menu.getHeight());
		},
		addContentView : function(view) {
			console.log(view);
			this.showBusy();
			if (typeof (view) === 'string') {
				Ext.getCmp('content').add(Ext.create(view, {
					closable : true
				})).show();
			} else {
				Ext.getCmp('content').add(view).show();
			}
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
				SmartFactory.setStatus({
					text : 'View Not Found!',
					iconCls : 'x-status-error',
					clear : true
				// auto-clear after a set interval
				});
			}
		}
	};
})();
