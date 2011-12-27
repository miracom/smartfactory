Ext.define('ARC.view.task.TaskTab', {
	extend : 'Ext.tab.Panel',

	initComponent : function() {
		this.callParent();

		this.infoTab = this.add(this.buildTabInfo());
		this.basicTab = this.add(this.buildTabBasic());
		this.masterTab = this.add(this.buildTabMaster());
		this.slaveTab = this.add(this.buildTabSlave());

		// active info tab
		this.setActiveTab(this.infoTab);
	},

	buildTabInfo : function() {
		return Ext.create('ARC.view.task.TaskInfo', {
			title : 'Info',
			dbName : this.dbName,
			taskId : this.taskId
		});
	},
	buildTabBasic : function() {
		return Ext.create('ARC.view.task.TaskBasic', {
			title : 'Basic',
			dbName : this.dbName,
			taskId : this.taskId
		});
	},
	buildTabMaster : function() {
		return Ext.create('ARC.view.task.TaskMaster', {
			title : 'Master',
			dbName : this.dbName,
			taskId : this.taskId
		});
	},
	buildTabSlave : function() {
		return Ext.create('ARC.view.task.TaskSlave', {
			title : 'Slave',
			dbName : this.dbName,
			taskId : this.taskId
		});
	}
});
