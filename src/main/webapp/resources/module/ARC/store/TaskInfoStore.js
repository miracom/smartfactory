Ext.define('ARC.store.TaskInfoStore', {
	extend : 'Ext.data.Store',
	
	autoLoad : false,

	model : 'ARC.model.TaskInfo',

	proxy : {
		type : 'ajax',
		url : 'module/ARC/data/taskInfo.json',
		reader : {
			type : 'json',
			//root : 'taskBasic',
			//totalProperty : 'total'
		}
	},
	
	setParams : function(params)
	{
		this.proxy.extraParams = params;
	},
	
	setSubStores : function()
	{	
		var basicStore =Ext.create('Ext.data.Store', {
		    model : 'ARC.model.Basic',
			//fields : ['BACKUP_METHOD','DAYS','LOG_TYPE','MASTER_DELETION','OVERWRITE_FLAG','SLAVE_DELETION','TERM'],
		    data : this.getAt(0).data['taskBasic'],
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json'
		        }
		    },
		});
		
		var masterStore =Ext.create('Ext.data.Store', {
		    model : 'ARC.model.Master',
			data : this.getAt(0).data['taskMaster'],
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json'
		        }
		    },
		});
		
		var slaveStore =Ext.create('Ext.data.Store', {
		    model : 'ARC.model.Slave',
			data : this.getAt(0).data['taskSlave'],
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json'
		        }
		    },
		});

		Ext.applyIf(this,{basicStore : basicStore});
		Ext.applyIf(this,{masterStore : masterStore});
		Ext.applyIf(this,{slaveStore : slaveStore});
	}
});