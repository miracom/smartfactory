Ext.define('ARC.view.task.TaskSlave', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},

	bodyPadding : 10,
	initComponent : function() {
		this.callParent();
		
		this.slaveStore = this.bulidSlaveStore();

		this.add(this.buildlistNamePanel());
		this.add(this.buildlistDescPanel());
		
		this.taskInfoStore.on('datachanged',this.onStoreChanged, this);
	},
	
	bulidSlaveStore : function()
	{
		return Ext.create('ARC.store.SlaveStore');
	},
	
	onStoreChanged : function() {
		this.slaveStore.loadData(this.taskInfoStore.getAt(0).data['taskSlave']);
	},

	buttons : [ {
		text : 'SAVE',
		listeners : {
			click : function() {
				alert('SAVE');
			}
		}
	}, {
		text : 'DELETE',
		listeners : {
			click : function() {
				alert('DELETE');
			}
		}
	} ],

	buildlistNamePanel : function() {
		return {
			xtype : 'panel', //container
			flex : 1,
			cls : 'borderGray',
			margins : '0 10 0 0',
			items : [ {
				xtype : 'dataview',
				store : this.slaveStore,
				listeners : {
					itemclick : function(view, record, item, index, e, opt) {
						alert(record.get('SLAVE_TABLE'));
					}
				},

				autoScroll : true,

				cls : 'operation-list',
				itemSelector: '.operation-list-item',
				overItemCls: 'operation-list-item-hover',
				tpl : '<tpl for="."><div class="operation-list-item">{SLAVE_TABLE}</div></tpl>'
			} ],
			buttons : [ {
				text : 'ADD',
				listeners : {
					click : function() {
						alert('ADD');
					}
				}
			}, {
				text : 'ORDER',
				listeners : {
					click : function() {
						alert('ORDER');
					}
				}
			} ],
		};

	},
	buildlistDescPanel : function() {

		return {
			xtype : 'container',
			flex : 4,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ this.buildTermField(), this.buildConditionField(),this.buildKeyFieldPanel() ]
		};

	},

	buildTermField : function() {
		return {
			xtype : 'fieldcontainer',
			fieldLabel : 'Term Field',
			labelAlign : 'top',
			items : [ {
				xtype : 'combobox',
				anchor : '50%',
				store : Ext.create('Ext.data.Store', {
					fields : [ 'abbr', 'name' ],
					data : [ {
						"abbr" : "LOT_DEL_TIME",
						"name" : "LOT_DEL_TIME"
					} ]
				}),
				queryMode : 'local',
				displayField : 'name',
				valueField : 'abbr',
			} ]
		};
	},

	buildConditionField : function() {
		return {
			xtype : 'textareafield',
			fieldLabel : 'additional Condition Option 2 - Query',
			labelAlign : 'top',
			defaults : {
				anchor : '100%'
			}
		};
	},
	buildKeyFieldPanel : function() {

		var sm = Ext.create('Ext.selection.CheckboxModel');

		Ext.define('KeyField', {
			extend : 'Ext.data.Model',
			fields : [ {
				name : 'dbId',
				type : 'string'
			}, {
				name : 'taskId',
				type : 'string'
			} ]
		});

		var myStore = Ext.create('Ext.data.Store', {
			model : 'KeyField',
		});

		return {
			xtype : 'container',
			layout : {
				align : 'stretch',
				type : 'hbox'
			},
			flex : 1,
			items : [ {
				xtype : 'gridpanel',
				cls : 'dockNavigation',
				title : 'Key field',
				store : myStore,
				flex : 1,
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'dbId',
					text : 'dbId'
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'taskId',
					text : 'taskId'
				} ]
			}, {
				xtype : 'container',
				width : 40,
				layout : {
					align : 'center',
					pack : 'center',
					type : 'vbox'
				},
				items : [ {
					xtype : 'button',
					margins : '0 0 5 0',
					text : '<',
					handler : function() {
						// var sm =
						// this.up().up().down('#columnList').getSelectionModel();
						//						
						// for(var i in sm)
						// {
						// console.log(i);
						// }
						//						
						// this.up().up().down('#columnList').store.remove(sm.getSelection());
						//						
						// var r = Ext.create('KeyField', {
						// dbId : 'AAA',
						// taskId : 'TASK1',
						// active : true
						// });
						//						
						// myStore.insert(0, r);
					}
				}, {
					xtype : 'button',
					text : '>',
					handler : function() {

					}
				} ]
			}, {
				xtype : 'gridpanel',
				itemId : 'columnList',
				cls : 'dockNavigation',
				title : 'Column List',
				store : this.store,
				flex : 2,
				selModel : sm,
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'dbId',
					text : 'dbId'
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'taskId',
					text : 'taskId'
				} ]
			} ]
		};
	}
});
