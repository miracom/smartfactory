Ext.define('ARC.store.MasterStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,

	model : 'ARC.model.Master',
	
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});