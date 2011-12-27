Ext.define('WMG.store.NotificationStore', {
	extend : 'Ext.data.Store',

	storeId : 'wmg.notification_store',

	autoLoad : false,

	model : 'WMG.model.Notification'

//	groupers : [{
//        property : 'sender',
//        direction: 'ASC'
//	}],
	
//	sorters : [{
//        property : 'key',
//        direction: 'ASC'
//	}]
});