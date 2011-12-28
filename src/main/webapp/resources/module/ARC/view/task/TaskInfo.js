Ext.define('ARC.view.task.TaskInfo', {
	extend : 'Ext.panel.Panel',
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	 
	autoScroll : true,
	
	bodyPadding : 10,
	
	initComponent : function() {
		this.callParent();
		
		this.basicGrid = this.add(this.buildBasicGrid());
		//this.MasterGrid = this.add(this.buildMasterGrid());
		//this.conditionField = this.add(this.buildConditionField());
		//this.SlaveGrid = this.add(this.buildSlaveGrid());
		
		this.taskInfoStore.on('datachanged',this.onStoreChanged, this);
	},
	
	listeners : {
		activate : function(tab) {
			// store load ?
			//this.basicGrid.store = this.taskInfoStore.basicStore;
			//this.taskInfoStore.basicStore.load();
		}
	},	
	
	onStoreChanged : function() {
		//this.basicGrid.store = this.taskInfoStore.basicStore;
		//xxx = this.taskInfoStore;
		//console.log(this.basicGrid);
	},

	buttons : [ {
		text : 'DELETE',
		listeners : {
			click: function() {
				//this.up().up()
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
				dataIndex : 'DAYS',
			}, {
				header : 'Task',
				dataIndex : 'OVERWRITE_FLAG'
			}, {
				header : 'Master',
				dataIndex : 'MASTER_DELETION'
			}, {
				header : 'Over',
				dataIndex : 'SLAVE_DELETION',
			}, {
				header : 'S-Del',
				dataIndex : 'BACKUP_METHOD'
			}, {
				header : 'M-Del',
				dataIndex : 'LOG_TYPE'
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
