//Ext.require(['product/util/Msg']);

var Util = Util || {};

Util.Msg = function() {
	var msgCt;

	function createBox(t, s) {
		return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
	}

	return {
		msg : function(title, format) {
			if (!msgCt) {
				msgCt = Ext.core.DomHelper.insertFirst(document.body, {
					id : 'msg-div'
				}, true);
			}
			var s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
			var m = Ext.core.DomHelper.append(msgCt, createBox(title, s), true);
			m.hide();
			m.slideIn('t').ghost("t", {
				delay : 1000,
				remove : true
			});
		}
	};
};

var SmartFactory = SmartFactory || (function() {
	var modules_order = [];
	var modules = {};
	var current_user;
	var current_factory;
	var _communicator;
	var _msg;

	function getMsg() {
		if(_msg === undefined)
			_msg = new Util.Msg();
		return _msg;
	}

	function displayMsg(title, format) {
		getMsg().msg(title, format);
	}

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
		var joined = [];
		for(var i = 0;i < modules_order.length;i++)
			joined = joined.concat(modules[modules_order[i]]);
		return joined;
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
	
	function activeCommunicator(communicator) {
		if(_communicator === undefined && communicator !== undefined)
			_communicator = communicator;
		return _communicator;
	}
	
	return {
		modules : getModules,
		register : registerModule,
		controllers : getAllControllers,
		user : currentUser,
		factory : currentFactory,
		communicator : activeCommunicator,
		msg : displayMsg
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
};

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
//		console.log(e);
	}
};

SmartFactory.addContentView = function(view) {
//	console.log(view);
	this.showBusy();
	if (typeof (view) === 'string') {
		Ext.getCmp('content').add(Ext.create(view, {
			closable : true
		})).show();
	} else {
		Ext.getCmp('content').add(view).show();
	}
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

console = console || {
	log: function() {}
};

