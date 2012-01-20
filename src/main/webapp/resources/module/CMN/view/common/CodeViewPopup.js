/**
 * @class CMN.view.common.CodeViewPopup
 * 코드뷰 필드의 버튼을 클릭시 GCM 및 특정 테이블로 부터 코드 정보를 받아 화면에 팝업으로 표시한다.
 * 아래의 설정값을 받아 팝업을 구성한다.
 * codeviewOptions : 호출자로 부터 선언된 설정값.
 *  - table : 검색할 태이블 명 
 *  - selects : 조회할 테이블의 컬럼 명
 *  - columns : 팝업의 grid에 표시할 columns 설정 값
 *  - title : 팝업의 제목
 * 
 * @extends Ext.window.Window
 * @author kyunghyang
 *
 */
Ext.define('CMN.view.common.CodeViewPopup', {
	extend : 'Ext.window.Window',

	width : 450,
	height : 500,
	modal : true,

	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	
	/*
	 * 컨포넌트가 생성될때 필요한 설정값을 정의한다.
	 */
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

	/*
	 * 컨포넌트가 실행될때 초기 설정 값을 정의한다.
	 * - title : 팝업에 표시할 제목
	 * - store : 조회조건을 설정 후 store를 생성.
	 * - grid : 팝업에 표시될 gird 컨포넌트를 설정.
	 * - search : 특정 컬럼의 값을 조회 조건으로 추가하여 설정
	 * - loadStore : 조회 결과를 읽어와 화면 grid를 갱신한다. 
	 */
	initComponent : function() {
		this.callParent();
		this.title = this.codeviewOptions.title || 'CodeView';
		
		this.store = this.buildStore();
		
		this.grid = this.add(this.buildGrid());
		this.search = this.add(this.buildSearch());

		this.loadStore(this.codeviewOptions.client.bInitFilter);
	},
	
	/*
	 * CodeViewField의 값을 팝업 실행시 초기 검색조건으로 추가한 후 컨포넌트의 store를 읽어 온다.
	 * @param {Boolean} bInitfilter 검색조건 추가 여부
	 */
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
	
	/*
	 * 조회 조건에 맞게 설정 후 store를 생성한다.
	 */
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

	/*
	 * 팝업 화면에 표시될 gird를 생성한다.
	 * 해당 코드를 선택시 팝업은 사라지고 해당 코드값은 CodeViewField에 표시된다.
	 */
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
	
	/*
	 * 팝업내 특정 컬럼을 조회하는 windowSearchField를 생성한다.
	 * 기본 조건에 해당 조회 조건을 추가하여 store를 읽어 올때 적용된다.
	 */
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

	/* refresh버튼을 클릭시 화면정보가 갱신된다.*/
	tools : [ {
		type : 'refresh',
		tooltip : 'Refresh form Data',
		handler : function(event, toolEl, panel) {
			var window = panel.up('window');
			window.store.load();
		}
	} ]
});
