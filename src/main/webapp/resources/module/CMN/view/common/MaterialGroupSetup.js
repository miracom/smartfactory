/**
 * @class CMN.view.common.MaterialGroupSetup
 * @extends Ext.container.Container
 * @author Kyunghyang
 *  
 * 
 */
Ext.define('CMN.view.common.MaterialGroupSetup',{
	extend : 'Ext.grid.property.Grid',
	plugins : [ ],
	alias : 'widget.cmn_material_groupsetup',
	title : 'Group Setup',

	//bodyStyle : 'padding:5px',

	//layout : 'fit',

	defaults : {
	},
	source : {},
	initComponent : function() {
		// 
		this.callParent();	
		var cmfStore = Ext.create('WIP.store.FactoryCmfItemStore');
		cmfStore.load({
			params : {
				ITEM_NAME : 'GRP_MATERIAL'
			},
			scope  : this,
			callback: function(records, operation, success) {
				if (success && records.length>0){
					this.cmfData = records;
					var source = {};
					for(var i in this.cmfData){
						var cmf = this.cmfData[i];
						if(cmf.get("PROMPT").trim() != ''){
							source[cmf.get("PROMPT")] = ' ';
						}
					}
					this.setSource(source);
				}
			}
		
		});	
	}
});