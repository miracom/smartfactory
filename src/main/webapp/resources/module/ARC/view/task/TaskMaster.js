Ext.define('ARC.view.task.TaskMaster', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	bodyPadding : 10,

	initComponent : function() {
		
		this.callParent();
		
		this.mConditionStore = this.bulidmConditionStore();
		this.columnStore = this.bulidColumnStore();
		
		this.tableNameField =  this.add(this.buildTableField());
		//this.termField =  this.add(this.buildTermField());
		this.conditionGrid =  this.add(this.buildConditionGrid());
		//this.conditionFiled =  this.add(this.buildConditionField());
		this.keyFieldPanel =  this.add(this.buildKeyFieldPanel());
		
		this.taskInfoStore.on('datachanged',this.onStoreChanged, this);
	},
	
	bulidmConditionStore : function()
	{
		return Ext.create('ARC.store.MconditionStore');
	},
	
	bulidColumnStore : function()
	{
		return Ext.create('ARC.store.ColumnListStore');
	},
	
	onStoreChanged : function() {
		
		var masterData = this.taskInfoStore.getAt(0).data['taskMaster'];
		this.tableNameField.down('#mastertable').setText(masterData[0]['MASTER_TABLE']);
		
		this.mConditionStore.loadData(this.taskInfoStore.getAt(0).data['taskMasterCondition']);
		
		//"CONDITION_TYPE = D" Grid 출력
		this.mConditionStore.filter([
		              {property: "CONDITION_TYPE", value: "D"}
		          ]);
		
		
		this.columnStore.setParams({
			tableName : masterData[0]['MASTER_TABLE']
		});
		
		this.columnStore.load();
		
	},

	buttons : [ {
		text : 'SAVE',
		listeners : {
			click : function() {
				alert('SAVE');
			}
		}
	} ],

	buildTableField : function() {
		return {
			xtype : 'fieldset',
			title : 'Master Table',
			height : 40,
			items : [ {
				xtype : 'label',
				itemId : 'mastertable',
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

	buildConditionGrid : function() {

		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor : 1,
			autoCancel : false
		});

		var sm = Ext.create('Ext.selection.CheckboxModel');

		return {
			xtype : 'gridpanel',
			flex : 1,
			selModel : sm,
			store : this.mConditionStore,
			plugins : [ rowEditing ],
			frame : true,
			columnLines : true,
			title : 'additional Condition Option 1',
			columns : [
					{
						header : 'COLUMN',
						dataIndex : 'COLUMN_NAME',
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
						header : 'CONDITION',
						dataIndex : 'CONDITION',
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
						header : 'VALUE',
						dataIndex : 'CONDITION_VALUE',
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
//					rowEditing.cancelEdit();
//
//					var r = Ext.create('ARC.store.ArchiveTaskStore', {
//						dbId : 'AAA',
//						taskId : 'TASK1',
//						masterTable : 'AAA',
//						active : true
//					});
//
//					// get gridpanel store
//					this.up().up().store.insert(0, r);
//					rowEditing.startEdit(0, 0);
				}
			}, {
				itemId : 'remove',
				text : 'Remove',
				handler : function() {
//					var sm = this.up().up().getSelectionModel();
//					
//					rowEditing.cancelEdit();
//					this.up().up().store.remove(sm.getSelection());
				},
				disabled : true
			} ],
			listeners: {
	            'selectionchange': function(view, records) {
	            	this.up().up().down('#remove').setDisabled(!records.length);
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
		
		
//		Ext.define('KeyField', {
//			extend: 'Ext.data.Model',
//			fields: [
//			    { name: 'dbId', type: 'string' },
//				{ name: 'taskId', type: 'string' }
//		    ]
//		});
//		
//		var myStore = Ext.create('Ext.data.Store', {
//		    model: 'KeyField',
//		});
		
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
				store : this.columnStore,
				itemId : 'columnList',
				cls : 'dockNavigation',
				title : 'Column List',
				flex : 2,
				selModel : sm,
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN_NAME',
					text : 'COLUMN',
					flex : 3
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'DATA_TYPE',
					text : 'TYPE',
					flex : 2
				} , {
					xtype : 'gridcolumn',
					dataIndex : 'DATA_LENGTH',
					text : 'LENGTH',
					flex : 1,
					align : 'center'
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'CONSTRAINT_TYPE',
					text : 'CONSTRAINT',
					flex : 1,
					align : 'center'
				}]
			} ]
		};
	}
});