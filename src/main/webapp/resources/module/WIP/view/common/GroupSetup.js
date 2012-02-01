/**
 * @class WIP.view.common.GroupSetup
 * @extends Ext.container.Container
 * @author Kyunghyang
 * 
 * 
 */
Ext.define('WIP.view.common.GroupSetup', {
	extend : 'Ext.panel.Panel',
	plugins : [],
	alias : 'widget.cmn_groupsetup',
	//layout : 'fit',
//	layout : 'anchor',
//	defaults : {
//		labelSeparator : '',
//		anchor : '100%'
//	},
	layout: {
        type: 'hbox'
    },
    padding : 5,
	
	initComponent : function() {
		this.items = [];
		this.callParent();
		this.store = Ext.create('WIP.store.FactoryCmfItemStore');
		var self = this;
		
		self.valueStore.on('load', function(store) {
			self.buildOk = false;
			self.removeAll();
			self.store.load({
				params : {
					ITEM_NAME : self.itemName
				},
				scope : self,
				callback : function(records, operation, success) {
					if (success && records.length > 0) {
						self.buildOk = self.buildFieldSet(records,store);
					}
				}
			});
		});
	},

	buildFieldSet : function(records,store){
		var fieldSet1 = [];
		var fieldSet2 = [];
		var self = this;
		for (var i=1; i<records.length+1;i++) {
			var value = store.getAt(0).get(self.fieldNamePrefix+i);
			var prompt = records[i-1].get("PROMPT").trim();
			var opt = records[i-1].get("OPT").trim();
			if(prompt != ''){
				var field = {
						xtype : 'textfield',
						fieldLabel : prompt,
						itemId : self.fieldNamePrefix+i,
						name : self.fieldNamePrefix+i,
						value : value
					};
				if(opt != 'N'){
					Ext.apply(field,{labelStyle: 'font-weight:bold'});
				}
				if(i<11){
					fieldSet1.push(field);
				}
				else{
					fieldSet2.push(field);
				}
			}
		}
		this.add({
			xtype : 'container',
			itemId : 'group1',
			layout : 'anchor',
			padding : 5,
			flex: 1,
			defaults : {
				labelSeparator : '',
				anchor : '100%'
			},
			items : fieldSet1
		});
		//if(fieldSet2.length != 0){
			this.add({
				xtype : 'container',
				itemId : 'group2',
				layout : 'anchor',
				padding : 5,
				flex: 1,
				defaults : {
					labelSeparator : '',
					anchor : '100%'
				},
				items : fieldSet2
			});
		//}
		return true;
	}

});