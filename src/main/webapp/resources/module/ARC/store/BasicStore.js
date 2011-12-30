Ext.define('ARC.store.BasicStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,

	model : 'ARC.model.Basic',
	
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});