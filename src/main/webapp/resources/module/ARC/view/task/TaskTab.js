Ext.define('ARC.view.task.TaskTab', {
	extend : 'Ext.tab.Panel',

	initComponent : function() {
		var me = this;

		me.callParent();

		this.infoTab = me.add(me.buildTabInfo());
		this.basicTab = me.add(me.buildTabBasic());
		this.masterTab = me.add(me.buildTabMaster());
		this.slaveTab = me.add(me.buildTabSlave());

		// active info tab
		me.setActiveTab(this.infoTab);
	},

	buildTabInfo : function() {
		return Ext.create('ARC.view.task.TaskInfo', {
			title : 'Info'
		});
	},
	buildTabBasic : function() {
		return Ext.create('ARC.view.task.TaskBasic', {
			title : 'Basic'
		});
	},
	buildTabMaster : function() {
		return Ext.create('ARC.view.task.TaskMaster', {
			title : 'Master'
		});
	},
	buildTabSlave : function() {
		return Ext.create('ARC.view.task.TaskSlave', {
			title : 'Slave'
		});
	}
});
