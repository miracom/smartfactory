Ext.define('plugin.User', function() {
	var current_user = login.username;
	var current_factory = login.factory;
	
	function currentFactory(factory) {
		if (factory !== undefined)
			current_factory = factory;
		return current_factory;
	}

	function currentUser(user) {
		if (user !== undefined)
			current_user = user;
		return current_user;
	}

	return {
		user : currentUser,
		factory : currentFactory
	};
}());