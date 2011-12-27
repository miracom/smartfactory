Ext.define('ARC.view.task.TaskTab', {
	extend : 'Ext.tab.Panel',

	initComponent : function() {
		this.callParent();

		this.taskInfoStore = this.buildtaskInfoStore();
		this.taskInfoStore.setParams({
			dbName : this.dbName,
			taskId : this.taskId
		});
		
		this.infoTab = this.add(this.buildTabInfo());
		this.basicTab = this.add(this.buildTabBasic());
		this.masterTab = this.add(this.buildTabMaster());
		this.slaveTab = this.add(this.buildTabSlave());
		// active info tab
		this.setActiveTab(this.infoTab);

		this.taskInfoStore.load({
			callback: function(r,options,success) {
		         if(success == true) {
		        	 this.setSubStores();
		          }
		          else {
		              alert("failed");
		          }
		     }
		});
	},
	
	buildtaskInfoStore : function() {
		return Ext.create('ARC.store.TaskInfoStore');
	},

	buildTabInfo : function() {
		return Ext.create('ARC.view.task.TaskInfo', {
			title : 'Info',
			taskInfoStore : this.taskInfoStore
		});
	},

	buildTabBasic : function() {
		return Ext.create('ARC.view.task.TaskBasic', {
			title : 'Basic',
			taskInfoStore : this.taskInfoStore
		});
	},

	buildTabMaster : function() {
		return Ext.create('ARC.view.task.TaskMaster', {
			title : 'Master',
			taskInfoStore : this.taskInfoStore
		});
	},

	buildTabSlave : function() {
		return Ext.create('ARC.view.task.TaskSlave', {
			title : 'Slave',
			taskInfoStore : this.taskInfoStore
		});
	}
});
