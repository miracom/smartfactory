Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Ext.ux' : 'js/ux'
	}
});

Ext.onReady(function() {
	SmartFactory.user(Ext.getBody().getAttribute('user'));
	SmartFactory.factory(Ext.getBody().getAttribute('factory'));

	Ext.application({
		name : 'SmartFactory',
		autoCreateViewport : false,

		controllers : [ 'SmartFactory.controller.ApplicationController' ]
				.concat(SmartFactory.controllers()),

		launch : function() {
			// Login 등등.. 여기서
			// ...
//			Ext.apply(SmartFactory, Miracom);

			Ext.create('SmartFactory.view.Viewport').show();
		}
	});
});
