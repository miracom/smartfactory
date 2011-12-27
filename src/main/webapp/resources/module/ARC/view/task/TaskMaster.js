Ext.define('ARC.view.task.TaskMaster', {
	extend : 'Ext.panel.Panel',
	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	bodyPadding : 10,

	initComponent : function() {
		var me = this;

		me.callParent();

		me.store = me.buildStore();

		me.add(me.buildTableField());
		me.add(me.buildTermField());
		me.add(me.buildConditionOneField());
		me.add(me.buildConditionField());
		me.add(me.buildKeyFieldPanel());
		
		this.taskInfoStore.on('datachanged',this.onStoreChanged);
	},
	
	onStoreChanged : function() {
		//alert('TaskMaster');
	},

	listeners : {
		activate : function(tab) {
			// store load ?
			this.store.load();
		}
	},

	buttons : [ {
		text : 'SAVE',
		listeners : {
			click : function() {
				alert('SAVE');
			}
		}
	} ],

	buildStore : function() {
		return Ext.create('ARC.store.ArchiveTaskStore', {
			pageSize : 5
		});
	},

	buildTableField : function() {
		return {
			xtype : 'fieldset',
			title : 'Master Table',
			height : 40,
			items : [ {
				xtype : 'label',
				text : 'Master Table'
			} ]
		};
	},

	buildTermField : function() {
		return {
			xtype : 'fieldset',
			title : 'Term Field',
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

	buildConditionOneField : function() {

		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor : 1,
			autoCancel : false
		});

		var sm = Ext.create('Ext.selection.CheckboxModel');

		return {
			xtype : 'gridpanel',
			store : this.store,
			flex : 1,
			selModel : sm,
			plugins : [ rowEditing ],
			frame : true,
			columnLines : true,
			title : 'additional Condition Option 1',
			columns : [
					{
						header : 'dbId',
						dataIndex : 'dbId',
						flex : 1,
						editor : {
							xtype : 'combobox',
							typeAhead : true,
							flex : 1,
							triggerAction : 'all',
							selectOnTab : true,
							store : [ [ 'Shade', 'Shade' ],
									[ 'Mostly Shady', 'Mostly Shady' ],
									[ 'Sun or Shade', 'Sun or Shade' ],
									[ 'Mostly Sunny', 'Mostly Sunny' ],
									[ 'Sunny', 'Sunny' ] ],
							lazyRender : true
						}
					},
					{
						header : 'taskId',
						dataIndex : 'taskId',
						flex : 1,
						editor : {
							xtype : 'combobox',
							flex : 1,
							typeAhead : true,
							triggerAction : 'all',
							selectOnTab : true,
							store : [ [ 'Shade', 'Shade' ],
									[ 'Mostly Shady', 'Mostly Shady' ],
									[ 'Sun or Shade', 'Sun or Shade' ],
									[ 'Mostly Sunny', 'Mostly Sunny' ],
									[ 'Sunny', 'Sunny' ] ],
							lazyRender : true
						}
					}, {
						header : 'Master',
						dataIndex : 'masterTable',
						flex : 1,
						editor : {
							xtype : 'textfield',
							flex : 1,
							allowBlank : false
						}
					} ],
			tbar : [ {
				text : 'Add',
				handler : function() {
					rowEditing.cancelEdit();

					var r = Ext.create('ARC.store.ArchiveTaskStore', {
						dbId : 'AAA',
						taskId : 'TASK1',
						masterTable : 'AAA',
						active : true
					});

					// get gridpanel store
					this.up().up().store.insert(0, r);
					rowEditing.startEdit(0, 0);
				}
			}, {
				itemId : 'removeEmployee',
				text : 'Remove',
				handler : function() {
					var sm = this.up().up().getSelectionModel();
					
					rowEditing.cancelEdit();
					this.up().up().store.remove(sm.getSelection());
				},
				disabled : true
			} ],
			listeners: {
	            'selectionchange': function(view, records) {
	            	this.up().up().down('#removeEmployee').setDisabled(!records.length);
	            }
	        }
		};
	},

	buildConditionField : function() {
		return {
			xtype : 'fieldset',
			title : 'additional Condition Option 2',
			layout : 'anchor',
			defaults : {
				anchor : '100%'
			},
			items : [ {
				fieldLabel : '[Query]',
				labelSeparator : '',
				labelAlign : 'top',
				xtype : 'textareafield'
			} ]
		};
	},
	buildKeyFieldPanel : function() {
		
		var sm = Ext.create('Ext.selection.CheckboxModel');
		
		
		Ext.define('KeyField', {
			extend: 'Ext.data.Model',
			fields: [
			    { name: 'dbId', type: 'string' },
				{ name: 'taskId', type: 'string' }
		    ]
		});
		
		var myStore = Ext.create('Ext.data.Store', {
		    model: 'KeyField',
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
				width : 100,
				layout : {
					align : 'center',
					pack : 'center',
					type : 'vbox'
				},
				items : [ {
					xtype : 'button',
					margins : '0 0 5 0',
					text : '<<',
					handler: function() {
//						var sm = this.up().up().down('#columnList').getSelectionModel();
//						
//						for(var i in sm)
//							{
//								console.log(i);
//							}
//						
//						this.up().up().down('#columnList').store.remove(sm.getSelection());
//						
//						var r = Ext.create('KeyField', {
//							dbId : 'AAA',
//							taskId : 'TASK1',
//							active : true
//						});
//						
//						myStore.insert(0, r);
				    }
				}, {
					xtype : 'button',
					text : '>>',
					handler: function() {
				        
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
