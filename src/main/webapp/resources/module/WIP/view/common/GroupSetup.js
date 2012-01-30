/**
 * @class WIP.view.common.GroupSetup
 * @extends Ext.container.Container
 * @author Kyunghyang
 * 
 * 
 */
Ext.define('WIP.view.common.GroupSetup', {
	extend : 'Ext.grid.Panel',
	plugins : [],
	alias : 'widget.cmn_groupsetup',
	title : 'Group Setup',

	defaults : {},

	columns : [ {
		header : 'Name',
		dataIndex : 'PROMPT'
	}, {
		header : 'Value',
		dataIndex : 'VALUE'
	}, {
		header : 'fieldName',
		dataIndex : 'FIELD_NAME'
	} ],

	initComponent : function() {
		// 
		this.store = Ext.create('WIP.store.FactoryCmfItemStore');
		this.callParent();
		var self = this;

		this.store.load({
			params : {
				ITEM_NAME : self.itemName
			},
			scope : this,
			callback : function(records, operation, success) {
				if (success && records.length > 0) {
					for ( var i=0; i<records.length;i++) {
						var record = records[i];
						var fieldName = self.fieldNamePrefix + i;
						record.set("FIELD_NAME", fieldName);
						//record.set("VALUE", self.valueStore.data.get(fieldName));
					}
				}
			}
		});

		this.valueStore.on('load', function(store) {
			self.store.each(function(record){
				record.set("VALUE", store.getAt(0).get(record.get("FIELD_NAME")));
			});
		});
	}
});