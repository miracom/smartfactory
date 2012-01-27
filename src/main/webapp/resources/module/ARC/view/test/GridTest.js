Ext.define('ARC.view.test.GridTest', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},
	bodyPadding : 10,
	initComponent : function() {
		this.callParent();
		
		var self = this;

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
		
		this.down('[itmeId=save]').on('click', function(bt, e, eOpts) {
			if(self.tableListStore.getRemovedRecords() != 0 
				&& self.tableListStore.getNewRecords() != 0
				&& self.tableListStore.getUpdatedRecords() != 0)
			{
				var form = self.getForm();
				var removeEncodedJson = self.objectToJson(self.tableListStore.getRemovedRecords());
				var newEncodedJson = self.objectToJson(self.tableListStore.getNewRecords());
				var updateEncodedJson = self.objectToJson(self.tableListStore.getUpdatedRecords());
				
				/*console.log("RemovedRecords()");
				console.log(removeEncodedJson );
				console.log("getNewRecords()");
				console.log(newEncodedJson);
				console.log("getUpdatedRecords()");
				console.log(updateEncodedJson);*/
				
				if (form.isValid()) {
					form.submit({
						params:{
							removerecords: removeEncodedJson,
							newrecords: newEncodedJson,
							updaterecords: updateEncodedJson
						},
						url : 'module/ARC/data/createorreplacegrid.json',
						waitMsg : 'Saving Data...', // save processbar
						success : function(form, action) {
							Ext.Msg.alert('Success', action.result.msg);
							self.tableListStore.load();
						},
						failure : function(form, action) {
							Ext.Msg.alert('Failed', action.result.msg);
						}
					});
				};
			}
		});
		
		this.tableListStore.load();	
	},
	objectToJson : function(object)
	{
		var datas = [];
		
		for(var i=0;i<object.length;i++) {
			datas.push(object[i].data);
		}
		
		return  Ext.encode(datas);
	},
	bulidTableListStore : function() {
		return Ext.create('ARC.store.GridTestListStore');
	},
	buttons : [ {
		text : 'SAVE',
		disabled : true,
		formBind : true, // only enabled once the form is valid
		itmeId: 'save'
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
				title : 'Key field',
				itemId : 'tableGrid',
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN1',
					text : 'COLUMN1',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN2',
					text : 'COLUMN2',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN3',
					text : 'COLUMN3',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN4',
					text : 'COLUMN4',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COLUMN5',
					text : 'COLUMN5',
					flex : 1,
					editor : {
						xtype : 'textfield',
						flex : 1,
						allowBlank : true
					}
				} ],
				viewConfig: { emptyText : 'There are no items to show in this view.'},
				tbar : [ {
					text : 'Add',
					iconCls : 'btnDataGridAdd',
					handler : function() {
						rowEditing.cancelEdit();
						
						var r = Ext.create('ARC.model.GridTestList', {
							COLUMN1 : 'test',
							COLUMN2 : 'test',
							COLUMN3 : 'test',
							COLUMN4 : 'test',
							COLUMN5 : 'test'
						});
						
						me.tableListStore.insert(0, r);
						rowEditing.startEdit(0, 0);
					}
				}, {
					itemId : 'remove',
					text : 'Remove',
					iconCls : 'btnDataGridDel',
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
