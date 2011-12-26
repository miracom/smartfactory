Ext.define('ARC.view.task.TaskInfo', {
	extend : 'Ext.panel.Panel',
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	 
	autoScroll : true,
	
	bodyPadding : 10,
	
	initComponent : function() {
		var me = this;

		me.callParent();
		
		me.add(me.buildBasicGrid());
		me.add(me.buildMasterGrid());
		me.add(me.buildConditionField());
		me.add(me.buildSlaveGrid());
	},
	listeners : {
		activate : function(tab) {
			// store load ?
		}
	},
	
	buttons : [ {
		text : 'DELETE',
		listeners : {
			click: function() {
	            alert('DELETE');
	        }
		}
	},{
		text : 'LIST',
		listeners : {
			click: function() {
	            alert('LIST');
	        }
		}
	}],

	buildTEST : function() {
		return {
			xtype : 'panel',
			title : 'Basic Task Option'
		};
	},

	buildBasicGrid : function() {
		return {
			xtype : 'gridpanel',
			cls : 'dockNavigation',
			title : 'Basic Task Option',
			margins : '0 0 5 0',
			flex : 2,
			columns : [ {
				header : 'DB',
				dataIndex : 'dbId',
			}, {
				header : 'Task',
				dataIndex : 'taskId'
			}, {
				header : 'Master',
				dataIndex : 'masterTable'
			}, {
				header : 'Over',
				dataIndex : 'overWriteFlag',
			}, {
				header : 'S-Del',
				dataIndex : 'slaveTableDeletion'
			}, {
				header : 'M-Del',
				dataIndex : 'masterTableDeletion'
			}, {
				header : 'Method',
				dataIndex : 'backupType'
			} ]
		};
	},

	buildMasterGrid : function() {
		return {
			xtype : 'gridpanel',
			cls : 'dockNavigation',
			title : 'Master Task Option',
			flex : 2,

			columns : [ {
				header : 'DB',
				dataIndex : 'dbId',
			}, {
				header : 'Task',
				dataIndex : 'taskId'
			}, {
				header : 'Master',
				dataIndex : 'masterTable'
			}, {
				header : 'Over',
				dataIndex : 'overWriteFlag',
			}, {
				header : 'S-Del',
				dataIndex : 'slaveTableDeletion'
			}, {
				header : 'M-Del',
				dataIndex : 'masterTableDeletion'
			}, {
				header : 'Method',
				dataIndex : 'backupType'
			} ]
		};
	},

	buildConditionField : function() {
		return {
			xtype:'fieldset',
			title: 'additional conditions',
            layout: 'anchor',
            defaults: {
                anchor: '100%' 
            },
            items : [ {
				xtype : 'textareafield'
			} ]
		};
	},

	buildSlaveGrid : function() {
		return {
			xtype : 'gridpanel',
			cls : 'dockNavigation',
			title : 'Slave Task Option',
			flex : 6,

			columns : [ {
				header : 'DB',
				dataIndex : 'dbId',
			}, {
				header : 'Task',
				dataIndex : 'taskId'
			}, {
				header : 'Master',
				dataIndex : 'masterTable'
			}, {
				header : 'Over',
				dataIndex : 'overWriteFlag',
			}, {
				header : 'S-Del',
				dataIndex : 'slaveTableDeletion'
			}, {
				header : 'M-Del',
				dataIndex : 'masterTableDeletion'
			}, {
				header : 'Method',
				dataIndex : 'backupType'
			} ]
		};
	}
});
