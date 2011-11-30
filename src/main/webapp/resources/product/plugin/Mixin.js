Ext.define('plugin.Mixin', {
	mixin : function(clazz, config) {
		try {
			switch (typeof (clazz)) {
			case 'string':
				Ext.apply(SmartFactory, Ext.create(clazz, config));
				return;
			case 'object':
				Ext.apply(SmartFactory, clazz);
			}
		} catch (e) {
			console.log(e);
		}
	}
});