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
		var me = this;

		me.callParent();
		
		me.add(me.buildDbCombo());
		me.add(me.buildMethodCombo());
		me.add(me.buildOverCombo());
		me.add(me.buildMdelCombo());
		me.add(me.buildSdelCombo());
	},
	
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Task ID'
	}],

	buttons : [ {
		text : 'SERACH',
		listeners : {
			click : function() {
				alert('SERACH');
			}
		}
	} ],
	
	buildDbCombo : function() {
		return {
			xtype : 'combobox',
			fieldLabel : 'DB',
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
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
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
					"abbr" : "0",
					"name" : "NONE"
				}, {
					"abbr" : "1",
					"name" : "DB"
				}, {
					"abbr" : "2",
					"name" : "FILE"
				}, {
					"abbr" : "3",
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
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
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
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
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
			store : Ext.create('Ext.data.Store', {
				fields : [ 'abbr', 'name' ],
				data : [ {
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
	}

});