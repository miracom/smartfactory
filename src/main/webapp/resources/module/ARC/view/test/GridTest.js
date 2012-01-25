Ext.define('ARC.view.test.GridTest', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},
	bodyPadding : 10,
	initComponent : function() {
		this.callParent();

		this.tableListStore = this.bulidTableListStore();
		
		this.rightPanel = this.add(this.buildTableGrid());

		//**load가 완료한후에 record를 commit해서 phantom = false하여 store의 load시 서버와 sync() 형태로 만든다.**
		this.tableListStore.on('load',function(store,records,sucessfull,operation){
			if(sucessfull)
			{
				/*for(var i in records)
				{
					records[i].commit();
				}*/
				
				store.each(function(record){
					record.commit();
				});
			}
		});
		
		this.tableListStore.load();	
		xxx = this.tableListStore;
	},

	bulidTableListStore : function() {
		return Ext.create('ARC.store.TableListStore');
	},

	buttons : [ {
		text : 'SAVE',
		disabled : true,
		formBind : true, // only enabled once the form is valid
		handler : function() {
			var me = this.up('form');
			var form = me.getForm();
			
			me.sub('tableGrid').getStore().sync();
			
			console.log("RemovedRecords()");
			console.log(me.sub('tableGrid').getStore().getRemovedRecords());
			console.log("getNewRecords()");
			console.log(me.sub('tableGrid').getStore().getNewRecords());
			console.log("getUpdatedRecords()");
			console.log(me.sub('tableGrid').getStore().getUpdatedRecords());

//			Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', function showResult(btn) {
//				if (btn == 'yes') {
//					if (form.isValid()) {
//						form.setValues({
//							processtype : 'C'
//						}); // 처리 TYPE 입력
//
//						// console.log(form.getValues());
//						form.submit({
//							url : 'module/ARC/data/createorreplacetask.json',
//							waitMsg : 'Saving Data...', // save processbar
//							success : function(form, action) {
//								Ext.Msg.alert('Success', action.result.msg);
//							},
//							failure : function(form, action) {
//								Ext.Msg.alert('Failed', action.result.msg);
//							}
//						});
//					}
//				}
//			});
		}
	}],
	buildTableGrid : function() {
		var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToMoveEditor : 1,
			autoCancel : false
		});

		var sm = Ext.create('Ext.selection.CheckboxModel');

		var me = this;
		return {
			xtype : 'container',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ {
				xtype : 'gridpanel',
				plugins : [ rowEditing ],
				selModel : sm,
				flex : 1,
				store : this.tableListStore,
				cls : 'dockNavigation',
				title : 'Key field',
				itemId : 'tableGrid',
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'TABLE_NAME',
					text : 'TABLE_NAME',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COMMENTS',
					text : 'COMMENTS',
					flex : 2,
					editor : {
						xtype : 'textfield',
						flex : 2,
						allowBlank : true
					}
				} ],
				viewConfig: { emptyText : 'There are no items to show in this view.'},
				tbar : [ {
					text : 'Add',
					handler : function() {
						rowEditing.cancelEdit();
						
						var r = Ext.create('ARC.store.TableListStore', {
							active : true
						});
						
						me.tableListStore.insert(0, r);
						rowEditing.startEdit(0, 0);
					}
				}, {
					itemId : 'remove',
					text : 'Remove',
					handler : function() {
	
						var seelctRecords = me.sub('tableGrid').getSelectionModel();

						rowEditing.cancelEdit();
						me.tableListStore.remove(seelctRecords.getSelection());
					}
				} ],
			} ]
		};
	}
});
