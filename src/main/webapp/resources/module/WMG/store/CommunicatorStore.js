Ext.define('WMG.store.CommunicatorStore', {
	extend : 'Ext.data.Store',

	storeId : 'wmg.communicator_store',

	autoLoad : false,

	model : 'WMG.model.Communicator',

	proxy : {
		type : 'ajax',
		url : 'module/WMG/data/communicators.json',
		reader : {
			type : 'json'
		}
	}
});