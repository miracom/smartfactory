Ext.define('ARC.view.task.TaskTab', {
	extend : 'Ext.tab.Panel',

	initComponent : function() {
		this.callParent();

		this.taskInfoStore = this.buildtaskInfoStore();
		this.taskInfoStore.setParams({
			dbName : this.dbName,
			taskId : this.taskId
		});
		
		this.taskInfoStore.load();
		
		this.taskInfoStore.on('load',this.onStoreLoad, this);
		
		this.infoTab = this.add(this.buildTabInfo());
		this.basicTab = this.add(this.buildTabBasic());
		this.masterTab = this.add(this.buildTabMaster());
		this.slaveTab = this.add(this.buildTabSlave());
		// active info tab
		this.setActiveTab(this.infoTab);
	},
	
	onStoreLoad : function() {
		
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
