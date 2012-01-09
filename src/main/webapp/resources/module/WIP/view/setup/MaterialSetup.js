Ext.define('WIP.view.setup.MaterialSetup', {
	extend : 'Ext.panel.Panel',
	
	plugins : [ Ext.create('CMN.plugin.Supplement') ],

	supplement : 'WIP.view.common.MaterialSelector',

	bbar : {
		xtype : 'cmn_trx_buttons'
	},

	initComponent : function() {
		this.items = [ this.zbasic, {
			xtype : 'tabpanel',
			items : [ this.zgeneral, this.zproperties, this.zgroup, this.zattrs, this.zcustom, this.zflows ]
		} ];

		this.callParent();
	},
		
	zbasic : {
		xtype : 'fieldset',
		itemId : 'zbasic',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		height : 120,
		items : [{
			xtype : 'container',
			layout : 'hbox',
			flex : 1,
			items : [{
				xtype : 'textfield',
				fieldLabel : 'Material',
				itemId : 'material',
				labelWidth : 140,
				labelSeparator : '',
				flex : 2
			}, {
				xtype : 'textfield',
				fieldLabel : 'Version',
				itemId : 'version',
				labelWidth : 140,
				labelSeparator : '',
				flex : 1
			}]
		}, {
			xtype : 'container',
			layout : 'hbox',
			flex : 1,
			items : {
				xtype : 'textfield',
				fieldLabel : 'Description',
				itemId : 'description',
				labelWidth : 140,
				labelSeparator : '',
				flex : 1
			} 
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