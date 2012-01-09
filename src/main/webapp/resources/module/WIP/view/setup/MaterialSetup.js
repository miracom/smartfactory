Ext.define('WIP.view.setup.MaterialSetup', {
	extend : 'Ext.panel.Panel',

	lbar : {
		xtype : 'wip_material_selector'
	},

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
		
	},
	
	zgeneral : {
		
	},
	
	zproperties : {
		
	},
	
	zgroup : {
		
	},
	
	zattrs : {
		
	}, 
	
	zcustom : {
		
	}
});