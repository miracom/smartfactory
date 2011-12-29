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
			xtype : 'fieldset',
			title : 'Target Period',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'textfield',
				itemId : 'termfield',
				value : 0
			}, {
				xtype : 'label',
				text : 'Term',
				margin : '2, 10, 0, 5'
			}, {
				xtype : 'textfield',
				itemId : 'dayfield',
				values : 0,
			}, {
				xtype : 'label',
				text : 'Day',
				margin : '2, 10, 0, 5'
			}, {
				xtype : 'label',
				width : 200,
				text : '20100101 ~ 20111212',
				margin : '2, 0, 0, 0'
			} ]
		};
	},

	buildBackupMethodField : function() {
		return {
			xtype : 'fieldset',
			title : 'Backup Method',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId : 'raNone',
				boxLabel : 'NONE',
				margin : '0, 10, 5, 0',
				inputValue: 'NONE',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raDb',
				boxLabel : 'DB',
				margin : '0, 10, 5, 0',
				inputValue: 'DB',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raFile',
				boxLabel : 'FILE',
				margin : '0, 10, 5, 0',
				inputValue: 'FILE',
				name : 'backupmethod'
			}, {
				xtype : 'radiofield',
				itemId : 'raDbFile',
				boxLabel : 'DB + FILE',
				margin : '0, 10, 5, 0',
				inputValue: 'DB+FILE',
				name : 'backupmethod'
			} ]
		};
	},

	buildLogField : function() {
		return {
			xtype : 'fieldset',
			title : 'Log Type',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raSample',
				boxLabel : 'Sample',
				margin : '0, 10, 5, 0',
				inputValue: 'Sample',
				name : 'logtype'
			}, {
				xtype : 'radiofield',
				itemId: 'raDetail',
				boxLabel : 'Detail',
				margin : '0, 10, 5, 0',
				inputValue: 'Detail',
				name : 'logtype'
			}]
		};
	},

	buildOverWriteField : function() {
		return {
			xtype : 'fieldset',
			title : 'Overwrite Flag',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				margin : '0, 10, 5, 0',
				inputValue: 'YES',
				name : 'overwrite'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				margin : '0, 10, 5, 0',
				inputValue: 'NO',
				name : 'overwrite'
			}]
		};
	},

	buildMdeletionField : function() {
		return {
			xtype : 'fieldset',
			title : 'Master Deletion',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				margin : '0, 10, 5, 0',
				inputValue: 'YES',
				name : 'masterdeletion'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				margin : '0, 10, 5, 0',
				inputValue: 'NO',
				name : 'masterdeletion'
			}]
		};
	},

	buildSdeltionField : function() {
		return {
			xtype : 'fieldset',
			title : 'Slave Deletion',
			layout : {
				align : 'stretchmax',
				type : 'hbox'
			},
			items : [ {
				xtype : 'radiofield',
				itemId: 'raYes',
				boxLabel : 'YES',
				margin : '0, 10, 5, 0',
				inputValue: 'YES',
				name : 'slavedeletion'
			}, {
				xtype : 'radiofield',
				itemId: 'raNo',
				boxLabel : 'NO',
				margin : '0, 10, 5, 0',
				inputValue: 'NO',
				name : 'slavedeletion'
			}]
		};
	}
});
