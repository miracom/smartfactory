Ext.define('ARC.store.SlaveStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,

	model : 'ARC.model.Slave',
	
    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});