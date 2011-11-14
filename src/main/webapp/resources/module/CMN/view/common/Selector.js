Ext.define('CMN.view.common.Selector', {
	extend : 'Ext.window.Window',
	
	layout : 'vbox',
	
	modal : true,
	closable : true,
	
	width : 300,
	height: 600,
	
    initComponent : function() {
        this.callParent();

        this.add(this.buildSearch());
    	this.add(this.buildGrid());
    },
	
	buildGrid : function() {
		return {
        	xtype: 'panel',
        	items: [
        	{
        		xtype: 'button',
        		text: 'SKY'
        	}
        	]
        };
	},
	
	buildSearch : function() {
		return {
        	xtype: 'panel',
        	items: [
        	{
        		xtype: 'button',
        		text: 'SKY'
        	}
        	]
        };
	}

	/*
	 * config model
	 * 
	 * 1. entitiy
	 * - table
	 * - query
	 * - service
	 * 2. showing fields
	 * - searching record field list
	 * 3. condition
	 * - fetch conditions
	 * - field-condition mapping
	 * 4. afterAction
	 * - select result mapping
	 * - field-record_field mapping
	 * 
	 * Ex)
	 * 
	 * type : store || table || url
	 * params : 
	 * {
	 * 	material : '$F{material}',
	 *  flow : '$F{flow}'
	 * }
	 * search_fields:
	 * ['material, 'description', 'version']
	 * after_mapping:
	 * {
	 * 	 material: '$F{material}',
	 *   description: '$F{description}'
	 * }
	 * after_action: function() {
	 * ...
	 * }
	 *  
	 * 
	 */
	
});