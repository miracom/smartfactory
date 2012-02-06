Ext.define('WIP.view.setup.MaterialSetup', {
	extend : 'WIP.view.common.AbstractEntitySetup',

	supplement : 'WIP.view.common.MaterialSelector',

	groupItemName : 'GRP_MATERIAL',
	cmfItemName : 'CMF_MATERIAL',
	
	groupFieldNamePrefix : 'MAT_GRP_',
	cmfFieldNamePrefix : 'MAT_CMF_',
	
	cmfMaxCnt : 30,
	
	dirtyCls : 'c-form-dirty',

	initComponent : function() {
		this.store = Ext.create('WIP.store.MaterialStore');
		this.callParent();
	
		var self = this;
		
		this.on('afterrender', function() {
			/*
			 * Supplement에 대한 이벤트리스너 등록은 클라이언트 뷰의 afterrender 이벤트 발생 이후에 해야한다.
			 */
			self.getSupplement().on('materialselected', function(record) {
				self.store.load();
			});
		});
	},

	onUpdate : function() {
		var rtn = this.getValues();
		console.log(rtn);
	},
	
	buildBasicForm : function(main) {
		return {
			xtype : 'container',
			itemId : 'zbasic',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			padding : 5,
			height : 64,
			items : [ {
				xtype : 'container',
				layout : 'hbox',
				flex : 1,
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Material',
					labelStyle: 'font-weight:bold',
					itemId : 'material',
					labelSeparator : '',
					name : 'MAT_ID',
					flex : 2
				}, {
					xtype : 'textfield',
					fieldLabel : 'Version',
					labelStyle: 'font-weight:bold',
					itemId : 'version',
					labelSeparator : '',
					name : 'MAT_VER',
					flex : 1
				} ]
			}, {
				xtype : 'textfield',
				fieldLabel : 'Description',
				itemId : 'description',
				labelSeparator : '',
				name : 'MAT_DESC',
				flex : 1
			} ]
		};
	},

	buildGeneralTab : function(main) {
		return {
			xtype : 'container',
			title : 'General',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			flex : 1,
			items : [ {
				xtype : 'container',
				layout : {
					type : 'vbox',
					align : 'stretch'
				},
				flex : 1
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					align : 'stretch'
				},
				flex : 1
			} ]
		};
	},

	buildPropertiesTab : function(main) {
		return {
			title : 'Properties'
		};	
	},
	
	buildOtherTabs : function() {
		return {
			title : 'Attach Flow'
		};
	}
});
