Ext.define('ARC.store.MconditionStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,

	model : 'ARC.model.Mcondition',
	
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});