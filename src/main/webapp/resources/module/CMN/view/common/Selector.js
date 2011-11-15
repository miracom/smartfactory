Ext.define('CMN.view.common.Selector', {
	extend : 'Ext.window.Window',
	
	title : 'Select Material',
	
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	
	modal : true,
	closable : true,
	
	width : 300,
	height: 600,

    initComponent : function() {
        this.callParent();

        this.store = this.buildStore();
    	this.add(this.buildGrid(this.store));
        this.add(this.buildSearch(this.store));
    },
    
    buildStore : function() {
    	return Ext.create('Ext.data.Store', {
    		autoLoad: true,
			fields: [
			           {name: 'MAT_ID', type: 'string'},
			           {name: 'MAT_VER', type: 'integer'},
			           {name: 'MAT_DESC', type: 'string'}
			        ],
			proxy : {
				type : 'ajax',
				url : 'module/WIP/data/materials.json',
				extraParams : {
					selects : ['factory', 'mat_id', 'mat_ver', 'mat_desc']
				},
				reader : {
					type : 'json'
				}
			}				
		});
    },
	
	buildGrid : function(store) {
		return {
        	xtype: 'grid',
			store: store,
			flex : 1,
        	columns : [ {
        		header : 'Material',
        		dataIndex : 'MAT_ID'
        	}, {
        		header : 'Version',
        		dataIndex : 'MAT_VER'
        	}, {
        		header : 'Description',
        		dataIndex : 'MAT_DESC'
        	} ]

        };
	},
	
	buildSearch : function(store) {
		return {
        	xtype: 'panel',
        	height: 30,
        	layout : {
        		align : 'stretch',
        		type : 'hbox'
        	},
         	items: [
 				{
					xtype : 'textfield',
					hideLabel : true,
					emptyText : 'Material',
					flex : 1
				},
 				{
					xtype : 'textfield',
					hideLabel : true,
					emptyText : 'Version',
					flex : 1	
				},
 				{
					xtype : 'textfield',
					hideLabel : true,
					emptyText : 'Description',
					flex : 1
				}
        	]
        };
	},
	
	tools:[{
	    type:'refresh',
	    tooltip: 'Refresh form Data',
	    handler: function(event, toolEl, panel){
	    	var window = panel.findParentByType('window');
	    	window.store.load();
	    }
	}]

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