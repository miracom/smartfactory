Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'SmartFactory' : 'product/SmartFactory.js',
		'Ext.ux' : 'js/ux',
		'Ext.ux.GMapPanel' : 'js/ux/map/GMapPanel3.js'
	}
});

Ext.require(['SmartFactory']);

Ext.module = function() {
	var modules_order = [];
	var modules = {};

	function getModules() {
		return modules;
	}

	function loadResources(module_name) {
		Text = Text || {};
		Text.format = Text.format || {};
		Text.title = Text.title || {};
		Text.msg = Text.msg || {};

		document.write('<script type="text/javascript" src="module/' + module_name + '/locale/' + login.locale + '.js"></script>');
	}
	
	function registerModule(module_name, controllers) {
		if (modules[module_name])
			return;

		modules[module_name] = controllers;
		modules_order.push(module_name);

		Ext.Loader.setPath(module_name, 'module/' + module_name);
		loadResources(module_name);
	}

	function getAllControllers() {
		var joined = [];
		for(var i = 0;i < modules_order.length;i++)
			joined = joined.concat(modules[modules_order[i]]);
		return joined;
	}
	
	return {
		modules : getModules,
		register : registerModule,
		controllers : getAllControllers
	};
	
}();

var console = console || {
	log : function() {
	},
	trace : function(){
	}
};

Ext.onReady(function() {
	Ext.application({
		name : 'SmartFactory',
		autoCreateViewport : false,

		controllers : [ 'SmartFactory.controller.ApplicationController' ]
				.concat(Ext.module.controllers()),

		launch : function() {
			Ext.create('SmartFactory.view.Viewport').show();
		}
	});
});
