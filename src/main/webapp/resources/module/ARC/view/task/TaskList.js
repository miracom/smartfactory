Ext.define('ARC.view.task.TaskList', {
	extend : 'Ext.panel.Panel',
	plugins : [ Ext.create('CMN.plugin.Supplement') ],
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	bodyPadding : 10,
	autoScroll : true,

	initComponent : function() {
		var me = this;

		me.callParent();

		// ADD Search Field
		me.supplement = Ext.create('ARC.view.serach.TaskSerach', {
			client : me
		});

		me.store = me.buildStore();

		me.add(me.buildGridPanel());

		me.store.load();

	},
	buildStore : function() {
		return Ext.create('ARC.store.TaskStore');
	},

	buildGridPanel : function() {
		return {
			xtype : 'gridpanel',
			title : 'Archive Task List',
			flex : 9,
			store : this.store,
			columns : [ {
				header : 'DB',
				dataIndex : 'DB_NAME',
				flex : 2
			}, {
				header : 'Task',
				dataIndex : 'TASK_ID',
				flex : 3
//				renderer : function(val)
//				{
//					console.log(val);
//				}
			}, {
				header : 'Master',
				dataIndex : 'MASTER_TABLE',
				flex : 3
			}, {
				header : 'Over',
				dataIndex : 'OVERWRITE_FLAG',
				align : 'center',
				flex : 1
			}, {
				header : 'M-Del',
				dataIndex : 'MASTER_DELETION',
				align : 'center',
				flex : 1
			}, {
				header : 'S-Del',
				dataIndex : 'SLAVE_DELETION',
				align : 'center',
				flex : 1
			}, {
				header : 'Method',
				dataIndex : 'BACKUP_METHOD',
				align : 'center',
				flex : 1
			},{
				header : 'KeyField',
				dataIndex : 'KEY_FIELD1',
				align : 'center',
				flex : 1,
				hidden: true
			}, {
				xtype : 'actioncolumn',
				header : 'Detail',
				align : 'center',
				flex : 1,
				items : [ {
					icon : 'image/iconMenu16.png',
					tooltip : 'Detail',
					handler : function(grid, rowIndex, colIndex) {
						var r = grid.getStore().getAt(rowIndex);

						var info = Ext.create('ARC.view.task.TaskTab', {
							title : r.get('TASK_ID'),
							dbName : r.get('DB_NAME'),
							taskId : r.get('TASK_ID'),
							closable : true
						});

						SmartFactory.addActiveContentView(info);
					}
				} ]

			}, {
				xtype : 'actioncolumn',
				header : 'R-Archive',
				dataIndex : 'Rarchive',
				align : 'center',
				flex : 1,
				items : [ {
					icon : 'image/iconMenu16.png',
					tooltip : 'R-Archive',
					handler : function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						alert(rec.get('TASK_ID'));
					},
					getClass: function(v, meta, rec) {
						if(rec.get('KEY_FIELD1') == null || rec.get('KEY_FIELD1') == '')
						{
							return 'x-hide-display'; //hide column
						}
					}
				}]
			}, {
				xtype : 'actioncolumn',
				header : 'D-Archive',
				align : 'center',
				flex : 1,
				items : [ {
					icon : 'image/iconMenu16.png',
					tooltip : 'D-Archive',
					handler : function(grid, rowIndex, colIndex) {
						var rec = grid.getStore().getAt(rowIndex);
						alert(rec.get('taskId'));
					},
					getClass: function(v, meta, rec) {
						if(rec.get('KEY_FIELD1') == null || rec.get('KEY_FIELD1') == '')
						{
							return 'x-hide-display'; //hide column
							//return 'x-grid-icon'; //show column
						}
					}
				} ]
			} ],

			buttons : [ {
				text : 'CREATE',
				listeners : {
					click : function() {
						var create = Ext.create('ARC.view.task.TaskCreate', {
							title : 'Archive Task Create',
							closable : true
						});

						SmartFactory.addActiveContentView(create);
					}
				}
			} ]

		// bbar : Ext.create('Ext.PagingToolbar', {
		// store : this.store,
		// displayInfo : true,
		// displayMsg : 'Displaying topics {0} - {1} of {2}',
		// emptyMsg : "No topics to display"
		// }),
		};
	}
});
