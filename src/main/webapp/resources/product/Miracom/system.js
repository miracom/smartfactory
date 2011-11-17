var SmartFactory = SmartFactory || (function() {
	var modules_order = [];
	var modules = {};
	var current_user;
	var current_factory;

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
	
	function currentFactory(factory) {
		if(current_factory === undefined && factory !== undefined)
			current_factory = factory;
		return current_factory;
	}
	
	function currentUser(user) {
		if(current_user === undefined && user !== undefined)
			current_user = user;
		return current_user;
	}
	
	return {
		modules : getModules,
		register : registerModule,
		controllers : getAllControllers,
		user : currentUser,
		factory : currentFactory 
	};
})();

SmartFactory.addDockingNav = function(view, config) {
	var defaults = {
		tabConfig : {
			width : 29,
			height : 22,
			padding : '0 0 0 2px'
		}
	};

	try {
		Ext.getCmp('docked_nav').add(Ext.create(view, Ext.merge(defaults, config)));
	} catch(e) {
		console.log(e);
	}
}

SmartFactory.addSystemMenu = function(view, config) {
	try {
		var system_menu = Ext.getCmp('system_menu');
		var menu = Ext.create(view, config);
		
		system_menu.insert(0, menu);

		var width = 6; // TODO should be more systemic.

		system_menu.items.each(function(el) {
			width += el.getWidth();
		});

		system_menu.setSize(width, system_menu.getHeight());
	} catch(e) {
		console.log(e);
	}
}

SmartFactory.addContentView = function(view) {
	console.log(view);
	this.showBusy();
//	if (typeof (view) === 'string') {
		Ext.getCmp('content').add(Ext.create('MBI.view.FormDesign', {
			closable : true
		})).show();
//	} else {
//		Ext.getCmp('content').add(view).show();
//	}
	this.clearStatus();
};

SmartFactory.setStatus = function(state) {
	Ext.getCmp('statusbar').setStatus(state);
};

SmartFactory.showBusy = function(o) {
	Ext.getCmp('statusbar').showBusy(o);
};

SmartFactory.clearStatus = function() {
	Ext.getCmp('statusbar').clearStatus();
};

SmartFactory.doMenu = function(menu) {
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
			clear : true // auto-clear after a set interval
		});
	}
};

SmartFactory.showSelector = function(config) {
	var selector = Ext.create('CMN.view.common.Selector', config);
	selector.show();
};
