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
		
		console.log(this.getAt(0).data);
		
//		console.log(this.getAt(0).data['taskBasic'][0]);
//		console.log(this.getAt(0).data['taskMaster']);
//		console.log(this.getAt(0).data['taskSlave']);
		
		
		Ext.define('Basic', {
			extend: 'Ext.data.Model',
			
			fields: [
				{ name: 'TERM', type: 'auto' },
				{ name: 'DAYS', type: 'auto' },
				{ name: 'OVERWRITE_FLAG', type: 'auto' },
				{ name: 'MASTER_DELETION', type: 'auto' },
				{ name: 'SLAVE_DELETION', type: 'auto' },
				{ name: 'BACKUP_METHOD', type: 'auto' },
				{ name: 'LOG_TYPE', type: 'auto' }
		    ]
		});

		
		var store =Ext.create('Ext.data.Store', {
		    model : 'ARC.model.Basic',
			//fields : ['BACKUP_METHOD','DAYS','LOG_TYPE','MASTER_DELETION','OVERWRITE_FLAG','SLAVE_DELETION','TERM'],
		    data : this.getAt(0).data['taskBasic'],
		    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json'
		            //root : 'taskBasic'
		        }
		    },
		});
		
		console.log(store);
		
		
	}
	


});