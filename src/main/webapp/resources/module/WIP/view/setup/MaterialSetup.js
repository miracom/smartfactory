Ext.define('WIP.view.setup.MaterialSetup', {
	extend : 'Ext.panel.Panel',
	
	plugins : [ Ext.create('CMN.plugin.Supplement') ],

	supplement : 'WIP.view.common.MaterialSelector',

	bodyStyle : 'padding:5px',

	buttons : {
		xtype : 'cmn_trx_buttons'
	},

	initComponent : function() {
		this.items = [ this.zbasic, {
			xtype : 'tabpanel',
			items : [ this.zgeneral, this.zproperties, this.zgroup, this.zattrs, this.zcustom, this.zflows ]
		} ];

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
	
	zbasic : {
		xtype : 'container',
		itemId : 'zbasic',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		padding : 5,
		height : 64,
		items : [{
			xtype : 'container',
			layout : 'hbox',
			flex : 1,
			items : [{
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
			}]
		}, {
			xtype : 'textfield',
			fieldLabel : 'Description',
			itemId : 'description',
			labelSeparator : '',
			flex : 1
		}]
	},
	
	zgeneral : {
		xtype : 'container',
		title : 'General',
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		flex : 1,
		items : [{
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
		}]
	},
	
	zproperties : {
		title : 'Properties'
	},
	
	zgroup : {
		title : 'Group Setup'
	},
	
	zattrs : {
		title : 'Attribute'
	}, 
	
	zcustom : {
		title : 'Customized Field'
	},
	
	zflows : {
		title : 'Attach Flow'
	}
});