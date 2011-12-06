Ext.Loader.setPath('plugin', 'product/plugin');

Ext.define('SmartFactory', {
	singleton : true,
	// alternateClassName : 'SmartFactory',
	requires : [ 'plugin.Msg', 'plugin.User', 'plugin.Mixin', 'plugin.UserInterface' ],
	mixins : {
		msg : 'plugin.Msg',
		user : 'plugin.User',
		mixin : 'plugin.Mixin',
		ui : 'plugin.UserInterface'
	}
});
