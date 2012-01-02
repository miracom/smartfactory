Ext.define('ARC.view.serach.TaskSerach', {
	extend : 'Ext.form.Panel',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	bodyPadding : 10,

	defaults : {
		labelAlign : 'top'
	},
	
	
	initComponent : function() {
		this.callParent();
		
		this.taskfield = this.add(this.buildtaskfield());
		this.dbCombo = this.add(this.buildDbCombo());
		this.methodCombo = this.add(this.buildMethodCombo());
		this.overCombo = this.add(this.buildOverCombo());
		this.mdelCombo = this.add(this.buildMdelCombo());
		this.sdelCombo = this.add(this.buildSdelCombo());
		
		this.dbCombo.on('load', function(store, records, options)
				{
					this.dbCombo.insert(0, new Ext.data.Record({FluidGroupId:'0', Text:'*'})); 
					this.dbCombo.setValue(0);
				}, this, {single: true});
	},
	
	buttons : [ {
		text : 'SERACH',
		listeners : {
			click : function() {
				var me = this.up('form');

				me.taskListStore.clearFilter(true);
				me.taskListStore.filter(me.getSerachfilter());
			}
		}
	} ],
	
	buildtaskfield : function() {
		return {
			xtype : 'textfield',
			fieldLabel : 'Task ID',
			enableKeyEvents : true, // textfield의 KeyEvent 사용여부
			listeners : {
				keydown : function(t, e) {
					if (e.keyCode == 13) {
						var me = this.up('form');
						
						me.taskListStore.clearFilter(true);
						me.taskListStore.filter(me.getSerachfilter());
					}
				}
			}
		};
	},
	
	
	buildDbCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'DB',
			emptyText : 'select Items..',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "ALL",
					"name" : "ALL"
				},{
					"abbr" : "MES",
					"name" : "MES"
				} ]
			}),
			queryMode : 'local',
			displayField : 'name',
			valueField : 'abbr',
		};
	},
	
	buildMethodCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'Method',
			emptyText : 'select Items..',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "ALL",
					"name" : "ALL"
				},{
					"abbr" : "NONE",
					"name" : "NONE"
				}, {
					"abbr" : "DB",
					"name" : "DB"
				}, {
					"abbr" : "FILE",
					"name" : "FILE"
				}, {
					"abbr" : "DB+FILE",
					"name" : "DB+FILE"
				} ]
			}),
			queryMode : 'local',
			displayField : 'name',
			valueField : 'abbr',
		};
	},
	
	buildOverCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'OverWrite',
			emptyText : 'select Items..',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "ALL",
					"name" : "ALL"
				},{
					"abbr" : "Y",
					"name" : "YES"
				}, {
					"abbr" : "N",
					"name" : "NO"
				} ]
			}),
			queryMode : 'local',
			displayField : 'name',
			valueField : 'abbr',
		};
	},
	
	buildMdelCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'M-Del',
			emptyText : 'select Items..',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "ALL",
					"name" : "ALL"
				},{
					"abbr" : "Y",
					"name" : "YES"
				}, {
					"abbr" : "N",
					"name" : "NO"
				} ]
			}),
			queryMode : 'local',
			displayField : 'name',
			valueField : 'abbr',
		};
	},
	
	buildSdelCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'S-Del',
			emptyText : 'select Items..',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "ALL",
					"name" : "ALL"
				},{
					"abbr" : "Y",
					"name" : "YES"
				}, {
					"abbr" : "N",
					"name" : "NO"
				} ]
			}),
			queryMode : 'local',
			displayField : 'name',
			valueField : 'abbr',
		};
	},
	
	getSerachfilter : function()
	{
		var serachFilter =  [];
		
		if(this.taskfield.getValue() != null)
		{
			serachFilter.push({property : "TASK_ID",value : this.taskfield.getValue()});
		}
		
		if(this.dbCombo.getValue() != null && this.dbCombo.getValue() != '')
		{
			if(this.dbCombo.getValue() == 'ALL')
			{
				serachFilter.push({property : "DB_NAME",value : ''});
			}
			else
			{
				serachFilter.push({property : "DB_NAME",value : this.dbCombo.getValue()});
			}
		}
		
		if(this.methodCombo.getValue() != null && this.methodCombo.getValue() != '')
		{
			if(this.methodCombo.getValue() == 'ALL')
			{
				serachFilter.push({property : "BACKUP_METHOD",value : ''});
			}
			else
			{
				serachFilter.push({property : "BACKUP_METHOD",value : this.methodCombo.getValue()});
			}
		}
		
		if(this.overCombo.getValue() != null && this.overCombo.getValue() != '')
		{
			if(this.overCombo.getValue() == 'ALL')
			{
				serachFilter.push({property : "OVERWRITE_FLAG",value : ''});
			}
			else
			{
				serachFilter.push({property : "OVERWRITE_FLAG",value : this.overCombo.getValue()});
			}
		}
		
		if(this.mdelCombo.getValue() != null && this.mdelCombo.getValue() != '')
		{
			if(this.mdelCombo.getValue() == 'ALL')
			{
				serachFilter.push({property : "MASTER_DELETION",value : ''});
			}
			else
			{
				serachFilter.push({property : "MASTER_DELETION",value : this.mdelCombo.getValue()});
			}
		}
		
		if(this.sdelCombo.getValue() != null && this.sdelCombo.getValue() != '')
		{
			if(this.sdelCombo.getValue() == 'ALL')
			{
				serachFilter.push({property : "SLAVE_DELETION",value : ''});
			}
			else
			{
				serachFilter.push({property : "SLAVE_DELETION",value : this.sdelCombo.getValue()});
			}
		}
		
		return serachFilter;
	}

});