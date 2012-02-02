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

	layout: {
        type: 'hbox'
    },
    padding : 5,
	
	initComponent : function() {
		this.store = Ext.create('WIP.store.FactoryCmfItemStore');
		this.buildOk = false;
		this.callParent();
		
		var self = this;
		
		this.addEvents({
            "buildOk" : true
        });
		
		this.store.load({
			params : {
				ITEM_NAME : self.itemName
			},
			scope : self,
			callback : function(records, operation, success) {
				if (success && records.length > 0) {
					self.buildOk = self.buildFieldSet(records);
					self.fireEvent('buildOk',self.itemName);
				}
			}
		});
	},

	buildFieldSet : function(records){
		var fieldSet1 = [];
		var fieldSet2 = [];

		for (var i=1; i<=this.cmfMaxCnt;i++) {
			var prompt = records[i-1].get("PROMPT").trim();
			var opt = records[i-1].get("OPT").trim();
			var hidden = false;
			if(prompt == '')
				hidden = true;

			var field = {
					xtype : 'textfield',
					fieldLabel : prompt,
					itemId : this.fieldNamePrefix+i,
					name : this.fieldNamePrefix+i,
					hidden : hidden
				};
			if(opt != 'N'){
				Ext.apply(field,{labelStyle: 'font-weight:bold'});
			}
			if(i<16){
				fieldSet1.push(field);
			}
			else{
				fieldSet2.push(field);
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
		return true;
	}

});