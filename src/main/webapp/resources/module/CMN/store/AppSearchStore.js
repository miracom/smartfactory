Ext.define('CMN.store.AppSearchStore', {
	extend : 'Ext.data.Store',

	storeId : 'cmn.appsearch_store',

	autoLoad : false,

	model : 'CMN.model.AppSearch',

	groupers : [{
        property : 'kind',
        direction: 'ASC'
	}],
	
	sorters : [{
        property : 'key',
        direction: 'ASC'
	}]
});