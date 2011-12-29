Ext.define('ARC.view.task.TaskCreate', {
	extend : 'Ext.panel.Panel',
	layout : {
		align : 'stretch',
		type : 'hbox'
	},
	bodyPadding : 10,
	initComponent : function() {
		var me = this;

		me.callParent();

		me.add(me.buildlistNamePanel());
		me.add(me.buildlistDescPanel());
	},

	listeners : {
		activate : function(tab) {
			// store load ?
		}
	},

	buttons : [ {
		text : 'CREATE',
		listeners : {
			click : function() {
				alert('CREATE');
			}
		}
	}, {
		text : 'CANCEL',
		listeners : {
			click : function() {
				alert('CANCEL');
			}
		}
	} ],

	buildlistNamePanel : function() {
		return {
			xtype : 'fieldset',
			title : 'Task Info',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			margins : '0 20 0 0',
			items : [ {
				xtype : 'combobox',
				fieldLabel : 'DB Name',
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
			}, {
				xtype : 'textfield',
				fieldLabel : 'Archive Task',
			}, {
				xtype : 'textfield',
				fieldLabel : 'Master Table',
			},{
				fieldLabel : '[Task Description]',
				labelSeparator : '',
				labelAlign : 'top',
				xtype : 'textareafield'
			} ]
		};
	},
	buildlistDescPanel : function() {

		return {
			xtype : 'container',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ this.buildKeyFieldPanel() ]
		};

	},

	buildKeyFieldPanel : function() {
		return {
			xtype : 'container',
			flex : 1,
			layout : {
				align : 'stretch',
				type : 'vbox'
			},
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Table Name',
			}, {
				xtype : 'gridpanel',
				flex : 1,
				cls : 'dockNavigation',
				title : 'Key field',
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
