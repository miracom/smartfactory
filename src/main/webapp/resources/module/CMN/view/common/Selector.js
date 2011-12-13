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

		if (!config.selectorOptions)
			throw new Error('selectorOptions should be configured.');

		if (!config.selectorOptions.table || !config.selectorOptions.columns || config.selectorOptions.columns.length <= 0)
			throw new Error('selectorOptions[table, columns] should be configured.');

		CMN.view.common.Selector.superclass.constructor.apply(this, arguments);
	},

	initComponent : function() {
		this.callParent();
		this.title = this.selectorOptions.title || 'Select';
		
		this.store = this.buildStore();

		this.grid = this.add(this.buildGrid());
		this.search = this.add(this.buildSearch());
		
		this.store.load();
	},
	
	buildStore : function() {
		return Ext.create('Ext.data.Store', {
			autoLoad : false,
			remoteFilter : true,
			filterOnLoad : false,
			fields : this.selectorOptions.selects,
			sorters : this.selectorOptions.sorters,
			filters : this.selectorOptions.filters,
			pageSize : 10,
			proxy : {
				type : 'ajax',
				url : 'module/CMN/data/select.json',
				extraParams : {
					selects : this.selectorOptions.selects,
					table : this.selectorOptions.table
				},
				reader : {
					type : 'json',
					root : 'result',
					totalProperty : 'total'
				}
			}
		});
	},

	buildGrid : function() {
		var selector = this;
		return {
			xtype : 'grid',
			store : this.store,
			flex : 1,
			columns : this.selectorOptions.columns,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : this.store,
				displayInfo : true,
				displayMsg : 'Displaying topics {0} - {1} of {2}',
				emptyMsg : "No topics to display",
				items : [ '-', {
					text : 'Button',
					enableToggle : true,
					toggleHandler : function(btn, pressed) {
					}
				} ]
			}),
			listeners : {
				select : function(rowModel, record, index, eOpts ) {
					//selector.selectorOptions.callback.call(selector, selector.selectorOptions.client, record);
					selector.selectorOptions.client.setValue(record);
					selector.selectorOptions.client.focus();
					//처리도중 destroy 하면 오류가 발생하여 wait time 추가
					Ext.defer(function() {
						selector.destroy();
					}, 1);
					
					return false;
				}
			}
		};
	},
	
	buildSearch : function() {
		var columns = this.selectorOptions.columns;
		var items = [];
		
		for ( var i in columns) {
			var column = columns[i];
			
			items.push({
				listeners : {
					specialkey : function(textfield, e) {
	                    if (e.getKey() != e.ENTER)
	                    	return;
						
						var selector = textfield.up('window');
						var filters = [];
						selector.search.items.each(function(textfield) {
							var value = textfield.getValue();
							if(value) {
								filters.push({
									property : textfield.getName(),
									value : value
								});
							}
						}, this);
						
						//기본조건 filter + 추가조건 filter
						filters = filters.concat(selector.selectorOptions.filters);
						
						selector.store.filters.clear();
						selector.store.filter(filters);
					}
				},
				
				xtype : 'textfield',
				name : column.dataIndex,
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
});
