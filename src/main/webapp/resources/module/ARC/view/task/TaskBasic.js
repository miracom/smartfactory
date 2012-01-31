Ext.define('ARC.view.task.TaskBasic', {
	extend : 'Ext.form.Panel',
	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	bodyPadding : 10,

	initComponent : function() {
		
		this.callParent();
		
		this.periodField = this.add(this.buildPeriodField());
		this.backupMethodField = this.add(this.buildBackupMethodField());
		this.logField = this.add(this.buildLogField());
		this.overWriteField = this.add(this.buildOverWriteField());
		this.masterDeltionField = this.add(this.buildMdeletionField());
		this.SlaveDeletionField = this.add(this.buildSdeltionField());
		
		this.taskInfoStore.on('datachanged',this.onStoreChanged, this);
	},
	
	onStoreChanged : function() {
		var basicData = this.taskInfoStore.getAt(0).data['taskBasic'];
		//Object 배열에 0번째 TERM 항목
		this.periodField.down('#termfield').setValue(basicData[0]['TERM']);
		this.periodField.down('#dayfield').setValue(basicData[0]['DAYS']);
		
		//BACKUP METHOD
		if(basicData[0]['BACKUP_METHOD'] == 'DB')
		{
			this.backupMethodField.down('#raDb').setValue(true);
		}
		else if(basicData[0]['BACKUP_METHOD'] == 'FILE')
		{
			this.backupMethodField.down('#raFile').setValue(true);
		}
		else if(basicData[0]['BACKUP_METHOD'] == 'DB+FILE')
		{
			this.backupMethodField.down('#raDbFile').setValue(true);
		}
		else
		{
			this.backupMethodField.down('#raNone').setValue(true);
		}
		
		//LOG
		if(basicData[0]['LOG_TYPE'] == '0')
		{
			this.logField.down('#raSample').setValue(true);
		}
		else if(basicData[0]['LOG_TYPE'] == '1')
		{
			this.logField.down('#raDetail').setValue(true);
		}
		
		//OVER WRITE
		if(basicData[0]['OVERWRITE_FLAG'] == 'YES')
		{
			this.overWriteField.down('#raYes').setValue(true);
		}
		else if(basicData[0]['OVERWRITE_FLAG'] == 'NO')
		{
			this.overWriteField.down('#raNo').setValue(true);
		}
		
		//MASTER
		if(basicData[0]['MASTER_DELETION'] == 'YES')
		{
			this.masterDeltionField.down('#raYes').setValue(true);
		}
		else if(basicData[0]['MASTER_DELETION'] == 'NO')
		{
			this.masterDeltionField.down('#raNo').setValue(true);
		}
		
		//SLAVE
		if(basicData[0]['SLAVE_DELETION'] == 'YES')
		{
			this.SlaveDeletionField.down('#raYes').setValue(true);
		}
		else if(basicData[0]['SLAVE_DELETION'] == 'NO')
		{
			this.SlaveDeletionField.down('#raNo').setValue(true);
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

	buildPeriodField : function() {
		return {
			xtype : 'fieldcontainer',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Target Period',
				labelAlign : 'top',
				itemId : 'termfield',
				value : 0
			}, {
				xtype : 'label',
				text : 'Term',
			}, {
				xtype : 'textfield',
				itemId : 'dayfield',
				values : 0,
			}, {
				xtype : 'label',
				text : 'Day',
			}, {
				xtype : 'label',
				width : 200,
				text : '20100101 ~ 20111212',
			} ]
		};
	},

	buildBackupMethodField : function() {
		return {
			xtype : 'radiogroup',
			fieldLabel : 'Backup Method',
			labelAlign : 'top',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId : 'raNone',
				boxLabel : 'NONE',
				inputValue: 'NONE',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raDb',
				boxLabel : 'DB',
				inputValue: 'DB',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raFile',
				boxLabel : 'FILE',
				inputValue: 'FILE',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raDbFile',
				boxLabel : 'DB + FILE',
				inputValue: 'DB+FILE',
				name : 'backupmethod'
			} ]
		};
	},

	buildLogField : function() {
		return {
			xtype : 'radiogroup',
			fieldLabel : 'Log Type',
			labelAlign : 'top',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raSample',
				boxLabel : 'Sample',
				inputValue: 'Sample',
				name : 'logtype'
			}, {
				xtype : 'radiofield',
				itemId: 'raDetail',
				boxLabel : 'Detail',
				inputValue: 'Detail',
				name : 'logtype'
			}]
		};
	},

	buildOverWriteField : function() {
		return {
			xtype : 'radiogroup',
			fieldLabel : 'Overwrite Flag',
			labelAlign : 'top',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				inputValue: 'YES',
				name : 'overwrite'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				inputValue: 'NO',
				name : 'overwrite'
			}]
		};
	},

	buildMdeletionField : function() {
		return {
			xtype : 'radiogroup',
			fieldLabel : 'Master Deletion',
			labelAlign : 'top',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				inputValue: 'YES',
				name : 'masterdeletion'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				inputValue: 'NO',
				name : 'masterdeletion'
			}]
		};
	},

	buildSdeltionField : function() {
		return {
			xtype : 'radiogroup',
			fieldLabel : 'Slave Deletion',
			labelAlign : 'top',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				inputValue: 'YES',
				name : 'slavedeletion'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				inputValue: 'NO',
				name : 'slavedeletion'
			}]
		};
	}
});
