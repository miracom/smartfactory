

Ext.define('CMN.view.common.Selector', {
	extend : 'Ext.window.Window',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	modal : true,

	width : 450,
	height : 500,

	constructor : function(config) {
		// var selectorOptions = {
		// title : '',
		// table : '',
		// selectors : [],
		// filters : [],
		// orders : [],
		// columns : [],
		// params : []
		// };

		if (!config.selectorOptions)
			throw new Error('selectorOptions should be configured.');

		if (!config.selectorOptions.table || !config.selectorOptions.columns || config.selectorOptions.columns.length <= 0)
			throw new Error('selectorOptions[table, columns] should be configured.');

		CMN.view.common.Selector.superclass.constructor.apply(this, arguments);
	},

	initComponent : function() {
		this.callParent();
		this.store = this.buildStore();
		this.title = this.selectorOptions.title || 'Select';
		this.add(this.buildGrid());
		this.add(this.buildSearch());
		
		//this.buildAjax();
	},
//	buildAjax : function() {
//		Ext.Ajax.request({
//			url : 'module/CMN/data/select.json',	
//			method: 'POST',
//		    params :{sd:"123", fd:"345"},
//		    success: function(response){
//		        var text = response.responseText;
//		        console.log(text);
//		        
//		    }
//		});
//	},
	buildStore : function() {   
		return Ext.create('Ext.data.Store', {
			autoLoad : true,
			fields : this.selectorOptions.selects,
			pageSize: 5,
			proxy : {
				type : 'ajax',
				url : 'module/CMN/data/select.json',	
				extraParams : {
					selects : this.selectorOptions.selects,
					filters : this.selectorOptions.filters,
					orders : this.selectorOptions.orders,
					table : this.selectorOptions.table,
					params : this.selectorOptions.params
				},
				actionMethods : {
					create : "POST",
					read : "POST",
					update : "POST",
					destroy : "DELETE"
				},
				reader : {
					type : 'json',
					root: 'daoResult',
	                totalProperty: 'total'
				}
				
//				writer: {
//					type : 'json'
//				},
//				headers:{
//					'Content-Type': 'application/json-rpc'
//				}
//				,
//				read : function(operation, callback, scope){
//					console.log(operation);
//					console.log(scope);
//				}
			}
		});
	},

	buildGrid : function() {
		return {
			xtype : 'grid',
			store : this.store,
			flex : 1,
			columns : this.selectorOptions.columns,
			bbar: Ext.create('Ext.PagingToolbar', {
	            store: this.store,
	            displayInfo: true,
	            displayMsg: 'Displaying topics {0} - {1} of {2}',
	            emptyMsg: "No topics to display",
            	items:[
                       '-', {
                       text: 'Button',
                       enableToggle: true,
                       toggleHandler: function(btn, pressed) {
                           
                       }
                   }]	
	        }),
		};
	},

	buildSearch : function() {
		var columns = this.selectorOptions.columns;

		var items = [];

		for ( var i in columns) {
			var column = columns[i];

			items.push({
				xtype : 'textfield',
				hideLabel : true,
				emptyText : column.header,
				flex : column.flex
			});
		}

		return {
			xtype : 'panel',
			height : 39,
			cls : 'windowSearchField',
			layout : {
				align : 'stretch',
				type : 'hbox'
			},
			items : items
		};
	},

	tools : [ {
		type : 'refresh',
		tooltip : 'Refresh form Data',
		handler : function(event, toolEl, panel) {
			var window = panel.up('window');
			window.store.load();
		}
	} ]

/*
 * config model
 * 
 * 1. entitiy - table - query - service 2. showing fields - searching record
 * field list 3. condition - fetch conditions - field-condition mapping 4.
 * afterAction - select result mapping - field-record_field mapping
 * 
 * Ex)
 * 
 * type : store || table || url params : { material : '$F{material}', flow :
 * '$F{flow}' } search_fields: ['material, 'description', 'version']
 * after_mapping: { material: '$F{material}', description: '$F{description}' }
 * after_action: function() { ... }
 * 
 * 
 */

});
