Ext.define('ARC.view.task.TaskCreate', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},
	bodyPadding : 10,
	initComponent : function() {
		this.callParent();

		this.tableListStore = this.bulidTableListStore();
		this.dbListStore = this.bulidDbListStore();

		this.leftPanel = this.add(this.buildLeftPanel());
		this.rightPanel = this.add(this.buildRightPanel());

//		var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
//		myMask.show();

		this.tableListStore.load();
		this.dbListStore.load();
	},

	bulidDbListStore : function() {
		return Ext.create('ARC.store.DbListStore');
	},

	bulidTableListStore : function() {
		return Ext.create('ARC.store.TableListStore');
	},

	buttons : [ {
		text : 'CREATE',
		disabled : true,
		formBind : true, // only enabled once the form is valid
		handler : function() {
			var me = this.up('form');
			var form = me.getForm();

			Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', function showResult(btn) {
				if (btn == 'yes') {
					if (form.isValid()) {
						form.submit({
							params:{
								processtype:"C"
							},
							url : 'module/ARC/data/createorreplacetask.json',
							waitMsg : 'Saving Data...', // save processbar
							success : function(form, action) {
								Ext.Msg.alert('Success', action.result.msg);
							},
							failure : function(form, action) {
								Ext.Msg.alert('Failed', action.result.msg);
							}
						});
					}
				}
			});
		}
	}, {
		text : 'CANCEL',
		listeners : {
			click : function() {
				var me = this.up('form');

				Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', function showResult(btn) {
					if (btn == 'yes') {
						me.close();
					}
				});
			}
		}
	} ],

	buildLeftPanel : function() {
		return {
			xtype : 'fieldset',
			title : 'Task Info',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			// fieldDefaults: {
			// xtype : 'textfield'를 명시하면 items에 xtype를 명시하지 않아도 기본 xtype는
			// textfield 이다.
			// },
			margins : '0 20 0 0',
			items : [ {
				xtype : 'combobox',
				fieldLabel : 'DB Name',
				store : this.dbListStore,
				queryMode : 'local',
				displayField : 'DB_NAME',
				valueField : 'DB_NAME',
				name : 'cbdbname', // name : 폼데이터가 서버에 보내질때 매개변수 이름으로 사용
				allowBlank : false, // (유효성검증) 필수값 체크
				emptyText : 'select Items..', // 값이 없을경우 출력할 text
				editable : false,
				msgTarget : 'side' // (유효성검증) 메시지 출력위치
			}, {
				xtype : 'textfield',
				fieldLabel : 'Archive Task',
				name : 'txttask',
				allowBlank : false,
				vtype : 'task',
				blankText : 'Enter Task Name..',
				msgTarget : 'side'
			}, {
				xtype : 'textfield',
				fieldLabel : 'Master Table',
				itemId : 'txtmaster',
				name : 'txtmaster',
				allowBlank : false,
				blankText : 'Enter Master Table..',
				msgTarget : 'side'
			}, {
				xtype : 'textareafield',
				fieldLabel : '[Task Description]',
				labelSeparator : '',
				labelAlign : 'top',
				name : 'txtdescription'
			} ]
		};
	},

	buildRightPanel : function() {

		return {
			xtype : 'container',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ this.buildTableGrid() ]
		};

	},

	getSerachfilter : function() {
		var serachFilter = [];
		var serachField = this.rightPanel.down().down('#txtserach');

		if (serachField.getValue() != null) {
			serachFilter.push({
				property : "TABLE_NAME",
				value : serachField.getValue()
			});
		}

		return serachFilter;
	},

	buildTableGrid : function() {

		var me = this;

		/*var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
			clicksToEdit : 1
		});
		
		var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});*/
		
		return {
			xtype : 'container',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ {
				xtype : 'container',
				layout : {
					align : 'top',
					type : 'hbox'
				},
				height : 30,
				items : [ {
					xtype : 'textfield',
					itemId : 'txtserach',
					name : 'txtserach',
					submitValue: false, //submit시 vlaue값을 전송시 플러그
					fieldLabel : 'Table Name',
					flex : 1,
					margins : '0 5 0 0',
					enableKeyEvents : true, // textfield의 KeyEvent 사용여부
					listeners : {
						keydown : function(t, e) {
							if (e.keyCode == 13) {
								// like 검색
								me.tableListStore.clearFilter(true);
								me.tableListStore.filter(me.getSerachfilter());
							}
						}
					}
				}, {
					xtype : 'button',
					text : 'SERACH',
					listeners : {
						click : function(t, e) {
							// like 검색
							me.tableListStore.clearFilter(true);
							me.tableListStore.filter(me.getSerachfilter());
						}
					}
				} ]
			}, {
				xtype : 'gridpanel',
				//plugins : [ cellEditing ],
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
						allowBlank : false
					}
				}, {
					xtype : 'gridcolumn',
					dataIndex : 'COMMENTS',
					text : 'COMMENTS',
					flex : 2
				} ],
				listeners : {
					itemdblclick : function(model, record, index, eOpts) {
						var txtmaster = me.leftPanel.down('#txtmaster');
						txtmaster.setValue(record.get('TABLE_NAME'));
					}
				},
				viewConfig: { emptyText : 'There are no items to show in this view.'}
			} ]
		};
	}
});
