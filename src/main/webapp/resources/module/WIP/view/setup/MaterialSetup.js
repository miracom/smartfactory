Ext.define('WIP.view.setup.MaterialSetup', {
	extend : 'WIP.view.common.AbstractEntitySetup',

	supplement : 'WIP.view.common.MaterialSelector',

	initComponent : function() {
		this.callParent();

		var self = this;

		this.on('afterrender', function() {
			/*
			 * Supplement에 대한 이벤트리스너 등록은 클라이언트 뷰의 afterrender 이벤트 발생 이후에 해야한다.
			 */
			self.getSupplement().on('materialselected', function(record) {
				self.sub('material').setValue(record.get('MAT_ID'));
				self.sub('version').setValue(record.get('MAT_VER'));
				self.sub('description').setValue(record.get('MAT_DESC'));
			});
		});
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
					itemId : 'material',
					labelSeparator : '',
					flex : 2
				}, {
					xtype : 'textfield',
					fieldLabel : 'Version',
					itemId : 'version',
					labelSeparator : '',
					flex : 1
				} ]
			}, {
				xtype : 'textfield',
				fieldLabel : 'Description',
				itemId : 'description',
				labelSeparator : '',
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

	buildOtherTabs : function() {
		return {
			title : 'Attach Flow'
		};
	}
});