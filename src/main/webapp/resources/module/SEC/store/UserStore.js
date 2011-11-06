Ext.define('SEC.store.UserStore', {
	extend : 'Ext.data.Store',

	storeId : 'sec.user_store',

	autoLoad : false,

	model : 'SEC.model.User',

	proxy : {
		type : 'ajax',
		url : 'module/SEC/data/user.json',
		reader : {
			type : 'json'
		}
	}

});