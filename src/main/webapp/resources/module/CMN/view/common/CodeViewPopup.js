Ext.define('CMN.view.common.CodeViewPopup', {
	extend : 'Ext.window.Window',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	modal : true,

	width : 450,
	height : 500,

	constructor : function(config) {

		if (!config.codeviewOptions)
			throw new Error('codeviewOptions should be configured.');
		
		if (!config.codeviewOptions.table)
			throw new Error('codeviewOptions[table] should be configured.');
		if (config.codeviewOptions.gcmdefuse=='true'){
			if(!config.codeviewOptions.selects <=0 || config.codeviewOptions.columns.length <= 0)
				throw new Error('codeviewOptions[columns, selects] should be configured.');	
		}

		CMN.view.common.CodeViewPopup.superclass.constructor.apply(this, arguments);
	},

	initComponent : function() {
		this.callParent();
		this.title = this.codeviewOptions.title || 'CodeView';
		
		this.store = this.buildStore();
		
		this.grid = this.add(this.buildGrid());
		this.search = this.add(this.buildSearch());

		this.loadStore(this.codeviewOptions.client.bInitFilter);
	},
	loadStore : function(bInitfilter)
	{
		if(bInitfilter)
		{
			var filters = [];
			var fieldset = this.codeviewOptions.client;
			var txtField = fieldset.txtFieldName;
			
			if(txtField instanceof Array) {
				for(var i in txtField) {	
					var field = fieldset.getComponent(txtField[i]);
					
					if(field.getValue())
					{
						filters.push({
							property : field.itemId,
							value : field.getValue()
						});
					}
				}
			} else {
				
				var field = fieldset.getComponent(txtField);
				if(field.getValue())
				{
					filters.push({
						property : field.itemId,
						value : field.getValue()
					});
				}
			}
			if (fieldset.refField){
				var formValue = fieldset.up('form').getValues();
				filters.push({
					property : fieldset.refGcmCol,
					value : formValue[fieldset.refField]
				});
			}
			//기본조건 filter + 추가조건 filter
			filters = filters.concat(this.codeviewOptions.filters);
			this.store.filters.clear();
			this.store.filter(filters);
		}
		else
		{
			this.store.load();
		}
	},
	buildStore : function() {
		return Ext.create('Ext.data.Store', {
			autoLoad : false,
			remoteFilter : true,
			filterOnLoad : false,
			fields : this.codeviewOptions.selects,
			sorters : this.codeviewOptions.sorters,
			filters : this.codeviewOptions.filters,
			pageSize : 10,
			proxy : {
				type : 'ajax',
				url : 'module/CMN/data/codeview.json',
				extraParams : {
					selects : this.codeviewOptions.selects,
					table : this.codeviewOptions.table,
					viewType : this.codeviewOptions.viewType,
					sqlparams : this.codeviewOptions.sqlparams
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
		var codeview = this;
		
		return {
			xtype : 'grid',
			store : this.store,
			flex : 1,
			columns : this.codeviewOptions.columns,
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
					//var a = Ext.get(this.up('window').grid.id);
					//console.log(a.getHeight());
					
					codeview.codeviewOptions.callback.call(codeview, codeview.codeviewOptions.client, record);
					//codeview.codeviewOptions.client.setValue(record);
					//codeview.codeviewOptions.client.focus();
					//처리도중 destroy 하면 오류가 발생하여 wait time 추가
					Ext.defer(function() {
						codeview.destroy();
					}, 1);
					
					return false;
				}
			}
		};
	},
	
	buildSearch : function() {
		var columns = this.codeviewOptions.columns;
		var fieldset = this.codeviewOptions.client;
		var items = [];

		for ( var i in columns) {
			
			var column = columns[i];
			var txtValue = "";

			//txtfield
			var field = fieldset.getComponent(column.dataIndex);
			if(field && field.itemId == column.dataIndex)
			{
				txtValue =  field.getValue();
			}
			
			//column.dataIndex 컬럼명
			items.push({
				listeners : {
					specialkey : function(textfield, e) {
	                    if (e.getKey() != e.ENTER)
	                    	return;
						
						var codeview = textfield.up('window');
						var filters = [];
						codeview.search.items.each(function(textfield) {
							var value = textfield.getValue();
							if(value) {
								filters.push({
									property : textfield.getName(),
									value : value
								});
							}
						}, this);
						
						//기본조건 filter + 추가조건 filter
						filters = filters.concat(codeview.codeviewOptions.filters);
						
						codeview.store.filters.clear();
						codeview.store.filter(filters);
					}
				},
				
				xtype : 'textfield',
				name : column.dataIndex,
				value : txtValue,
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
