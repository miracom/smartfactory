Ext.require('Ext.ux.grid.CheckColumn');
Ext.require('Ext.ux.grid.CheckColumn2');

Ext.define('ARC.view.test.GridTest', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},
	bodyPadding : 10,
	initComponent : function() {

		this.items = [ this.tableGrid ];

		this.callParent();

		var self = this;

		var store = this.sub('grid').store;
		
		var key = 'COLUMN1';

		/*
		 * load가 완료한후에 record를 commit해서 phantom이 false 상태로 만들어야 Store가 Sync 상태가
		 * 된다. Sync 상태가 되어여 getNewRecord, getRemovedRecords, getUpdatedRecords가
		 * load된 상태에서부터 적용된다.
		 */
		store.on('load', function(store, records, sucessfull, operation) {
			if (sucessfull) {
				store.each(function(record) {
					record.commit();
				});
			}
		});

		/* Store를 Reload하여 grid를 초기화 한다. */
		this.down('[itemId=resettbar]').on('click', function(bt, e, eOpts) {
			store.load();
		});

		/* 새로운 Row를 추가하고 insert check box의 상태를 true로 변경한다. */
		this.down('[itemId=addtbar]').on('click', function(bt, e, eOpts) {
			self.sub('grid').editingPlugin.cancelEdit();

			var r = Ext.create('ARC.model.GridTestList', {
				icheck : true
			});

			store.insert(0, r);

			self.sub('grid').editingPlugin.startEdit(0, 0);
		});

		/*
		 * row editor시 key값으로 정한 컬럼을 기준으로 중복체크를 한다. 
		 * key 컬럼이 중복되는 데이타는 등록이 불가능하다.
		 */
		this.sub('grid').editingPlugin.on('validateedit', function(editor, e) {
			var validate = false;
			editor.grid.store.each(function(record) {
				if (e.record.index != record.index) {
					if (record.data[key] == editor.getEditor().getValues()[key]) {

						validate = true;
					}
				}
			});

			if (validate) {
				e.cancel = true;
			} else {
				e.cancel = false;
			}
		});

		/* key가되는 컬럼은 추가된 Row는 입력이 가능하고 수정되는 Row는 입력이 불가능하다. */
		this.sub('grid').editingPlugin.on('beforeedit', function(editor) {
			if (editor.record.phantom == true) { 
				self.sub('grid').editingPlugin.editor.form.findField(key).enable();
			} else 
			{
				self.sub('grid').editingPlugin.editor.form.findField(key).disable();
			}
		});

		/* 새로 추가된 Row를 제외하고 Row에 수정이 일어날경우 update check box의 상태를 변경한다. */
		this.sub('grid').editingPlugin.on('edit', function(editor) {
			if (editor.record.get('icheck') == false) {
				if (editor.record.dirty == true) {
					editor.record.set('ucheck', true);
				} else {
					editor.record.set('ucheck', false);
				}
			}

		});

		/* 새로운 Row 추가시 key 컬럼이 공백일경우 추가된 공백 Row을 삭제한다. */
		this.sub('grid').editingPlugin.on('canceledit', function(editor) {
			if(editor.record.get(key) == '')
			{
				store.remove(editor.record);
			}
		});

		/* 삭제 check box의 상태가 true면 update, insert check box의 상태를 변경한다.
		 * 삭제 check box의 상태가 false면 insert 상태의 Row면 inser check box의 상태를 true하고
		 * update 상태의 Row면 update check box의 상태를 ture로 변경한다.
		 */
		this.down('[itemId=dcheck]').on('checkchange', function(me, index, checked) {
			if (checked) 
			{
				// i, u check box 선택해제
				store.getAt(index).set('icheck', false);
				store.getAt(index).set('ucheck', false);
			} else
			{
				// 삭제를 취소할경우 추가 상태면 icheck
				if (store.getAt(index).phantom == true) {
					store.getAt(index).set('icheck', true);
				}

				// 삭제를 취소할경우 수정 상태면 u
				else if (store.getAt(index).dirty == true) {
					store.getAt(index).set('ucheck', true);
				}
			}
		});

		/* 추가 check box의 선택을 해제하면 추가된 row가 삭제된다. */
		this.down('[itemId=icheck]').on('checkchange', function(me, index, checked) {
			if (checked == false && store.getAt(index).phantom == true) {
				store.remove(store.getAt(index));
			}
		});

		/* 수정 check box의 선택을 해제하면 수정 전상태로 복구된다. */
		this.down('[itemId=ucheck]').on('checkchange', function(me, index, checked) {
			if (checked == false && store.getAt(index).dirty == true) {
				for (columnName in store.getAt(index).modified) {
					store.getAt(index).set(columnName, store.getAt(index).raw[columnName]);
				}
			}
		});

		// grid 데이타 저장
		this.down('[itemId=save]').on('click', function(bt, e, eOpts) {

			// 삭제된 데이타 실제 store에 적용
			store.each(function(record) {
				if (record.get('dcheck')) // check box delete flag = true 삭제
				{
					store.remove(record);
				}
			});

			if (store.getRemovedRecords().length != 0 || store.getNewRecords().length != 0 || store.getUpdatedRecords().length != 0) {
				var form = self.getForm();
				var removeEncodedJson = self.recordsToJson(store.getRemovedRecords());
				var newEncodedJson = self.recordsToJson(store.getNewRecords());
				var updateEncodedJson = self.recordsToJson(store.getUpdatedRecords());

				if (form.isValid()) {
					form.submit({
						params : {
							removerecords : removeEncodedJson,
							newrecords : newEncodedJson,
							updaterecords : updateEncodedJson
						},
						url : 'module/ARC/data/createorreplacegrid.json',
						// waitMsg : 'Saving Data...', // save
						// processbar
						success : function(form, action) {
							Ext.Msg.alert('Success', action.result.msg);
							store.load();
						},
						failure : function(form, action) {
							Ext.Msg.alert('Failed', action.result.msg);
						}
					});
				}
				;
			}
		});

		store.load();
	},
	recordsToJson : function(object) {
		var datas = [];

		for ( var i = 0; i < object.length; i++) {
			datas.push(object[i].data);
		}

		return Ext.encode(datas);
	},
	// getobjectSize : function(obj) {
	// var size = 0;
	// var key = null;
	// for (key in obj) {
	// if (obj.hasOwnProperty(key)) size++;
	// }
	// return size;
	// },
	buttons : [ {
		text : 'SAVE',
		disabled : true,
		formBind : true, // only enabled once the form is valid
		itemId : 'save'
	} ],
	tableGrid : {
		xtype : 'grid',
		// selModel : Ext.create('Ext.selection.CheckboxModel'), //checkcolumn
		// 필드생성
		plugins : Ext.create('Ext.grid.plugin.RowEditing', { // row editor 생성
			clicksToMoveEditor : 1,
			autoCancel : false
		}),
		flex : 1,
		store : Ext.create('ARC.store.GridTestListStore'),
		cls : 'dockNavigation',
		title : 'Key field',
		itemId : 'grid',
		columns : [ {
			xtype : 'checkcolumn2',
			dataIndex : 'icheck',
			header : 'I',
			width : 50,
			itemId : 'icheck'
		}, {
			xtype : 'checkcolumn2',
			dataIndex : 'ucheck',
			header : 'U',
			width : 50,
			itemId : 'ucheck'
		}, {
			xtype : 'checkcolumn',
			dataIndex : 'dcheck',
			header : 'D',
			width : 50,
			itemId : 'dcheck'
		}, {
			xtype : 'gridcolumn',
			dataIndex : 'COLUMN1',
			text : 'COLUMN1',
			flex : 1,
			editor : {
				xtype : 'textfield',
				flex : 1,
				allowBlank : false
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
		viewConfig : {
			emptyText : 'There are no items to show in this view.',
			getRowClass : function(record, index) { // insert, update, delete에
				// 따른 row 글자변환
				var icheck = record.get('icheck');
				var dcheck = record.get('dcheck');
				var ucheck = record.get('ucheck');

				if (dcheck) {
					return 'delete-row';
				}

				if (ucheck) {
					return 'update-row';
				}

				if (icheck) {
					return 'insert-row';
				}
			}
		},
		tbar : [ {
			xtype : 'button',
			text : 'ADD',
			itemId : 'addtbar'
		}, {
			xtype : 'button',
			text : 'RESET',
			itemId : 'resettbar'
		} ]
	}

});
