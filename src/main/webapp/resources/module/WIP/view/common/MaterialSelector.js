Ext.require('Ext.ux.exporter.Exporter');

Ext.define('WIP.view.common.MaterialSelector', {
	/*
	 * 부모 클래스를 정의한다.
	 */
	extend : 'Ext.panel.Panel',

	/*
	 * plugins을 설정한다.
	 */
	plugins : [],
	
	/*
	 * 컴포넌트의 기능 관련된 설정을 한다.
	 */
	exportable : true,

	/*
	 * common 뷰인 경우에는 Alias를 정의한다.
	 */
	alias : 'widget.wip_material_selector',

	/*
	 * 컴포넌트 Identification과 관련된 속성을 정의한다. id, title
	 */
	title : 'Find Material',

	/*
	 * 컴포턴트 스타일을 적용한다.
	 */
	cls : 'nav supplement',
	bodyStyle : 'padding:5px',

	/*
	 * 부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다. id, title, flex, width,
	 */
	flex : 1,
	width : 180,

	/*
	 * 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 단, 복잡한 items, docked
	 * items 등은 initComponent에서 등록을 권장한다.
	 */
	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	defaults : {
		labelAlign : 'top'
	},

	/*
	 * Init Component 메쏘드를 오버라이드 한다.
	 * 
	 * 1. items (정적인 컴포넌트)를 등록한다. 2. docked item들을 등록한다. 3. callParent()를 호출한다.
	 * 4. 동적인 컴포넌트와 리스너들을 등록한다.
	 */
	initComponent : function() {
		/*
		 * 정적인 컴포넌트들을 등록한다. Docked Item들을 등록한다.
		 */
		this.items = [ this.zfilter, this.zviewmode, this.zlist ];
		this.bbar = [ this.zcount, this.zsearch, this.zrefresh, this.zexport ];

		/*
		 * 부모의 컴포넌트 초기화 기본 로직을 호출한다.
		 */
		this.callParent();

		/*
		 * 부가적인 작업을 한다. - 동적인 컴포넌트 추가 - 리스너 등록
		 */
		var self = this;

		this.on('render', function() {
			self.refreshList(true);
		});

		this.getList().store.on('datachanged', function(store) {
			self.getListCount().setValue(store.count());
		});

		this.getSearchField().on('specialkey', function(field, e) {
			if (e.getKey() == e.ENTER) {
				self.refreshList(false);
			}
		});

		this.getRefreshButton().on('click', function() {
			self.refreshList(true);
		});

		this.getViewModeRadio().on('change', function() {
			self.refreshList(false);
		});

		this.getDeletedItemFilter().on('change', function(check, value) {
			self.refreshList(true);
		});

		this.getDeactiveItemFilter().on('change', function(check, value) {
			self.refreshList(true);
		});
	},

	getList : function() {
		if (!this.list)
			this.list = this.down('[itemId=list]');
		return this.list;
	},

	getRefreshButton : function() {
		if (!this.refreshButton)
			this.refreshButton = this.down('button[itemId=refresh]');
		return this.refreshButton;
	},

	getListCount : function() {
		if (!this.listCount)
			this.listCount = this.down('[itemId=listCount]');
		return this.listCount;
	},

	getListLocalFilters : function() {
		var filters = [];
		var value = this.getSearchField().getValue();
		if (value.length > 0) {
			filters.push({
				property : 'MAT_ID',
				value : new RegExp(this.getSearchField().getValue())
			});
		}
		if (this.getDeletedItemFilter().getValue()) {
			filters.push({
				property : 'DELETE_FLAG',
				value : 'N'
			});
		}
		if (this.getDeactiveItemFilter().getValue()) {
			filters.push({
				property : 'DEACTIVE_FLAG',
				value : 'N'
			});
		}
		return filters;
	},

	getSearchField : function() {
		if (!this.searchField)
			this.searchField = this.down('[itemId=searchField]');
		return this.searchField;
	},

	getViewModeRadio : function() {
		if (!this.viewModeRadio)
			this.viewModeRadio = this.down('[itemId=viewmode]');
		return this.viewModeRadio;
	},

	getDeletedItemFilter : function() {
		if (!this.deletedItemFilter)
			this.deletedItemFilter = this.down('[itemId=include_deleted]');
		return this.deletedItemFilter;
	},

	getDeactiveItemFilter : function() {
		if (!this.deactiveItemFilter)
			this.deactiveItemFilter = this.down('[itemId=include_deactive]');
		return this.deactiveItemFilter;
	},

	refreshList : function(reload) {
		var store = this.getList().store;

		if (this.getViewModeRadio().getValue().viewmode != 2) {
			store.clearGrouping();
			this.getList().reconfigure(null, [ {
				text : 'MAT ID',
				flex : 1,
				dataIndex : 'MAT_ID'
			}, {
				text : 'V',
				width : 20,
				dataIndex : 'MAT_VER'
			}, {
				text : 'Desc',
				flex : 1,
				dataIndex : 'MAT_DESC'
			}, {
				text : 'D',
				width : 20,
				dataIndex : 'DELETE_FLAG'
			}, {
				text : 'A',
				width : 20,
				dataIndex : 'DEACTIVE_FLAG'
			} ]);
		} else {
			store.group('MAT_ID');
			this.getList().reconfigure(null, [ {
				text : 'V',
				width : 20,
				dataIndex : 'MAT_VER'
			}, {
				text : 'Desc',
				flex : 1,
				dataIndex : 'MAT_DESC'
			}, {
				text : 'D',
				width : 20,
				dataIndex : 'DELETE_FLAG'
			}, {
				text : 'A',
				width : 20,
				dataIndex : 'DEACTIVE_FLAG'
			} ]);
		}

		store.clearFilter(true);
		store.filter(this.getListLocalFilters());
		if (reload)
			store.load();
	},

	zfilter : {
		xtype : 'fieldset',
		itemId : 'filters',
		layout : 'anchor',
		defaults : {
			labelSeparator : '',
			anchor : '100%'
		},
		items : [ {
			xtype : 'codeview',
			labelWidth : 70,
			fieldLabel : 'Material Type',
			itemId : 'material_type',
			codeviewName : 'MaterialType',
			txtFieldFlex : [ 1 ],
			txtFieldName : [ 'GROUP_NAME' ],
			filter : [ {
				property : 'factory',
				value : SmartFactory.login.factory()
			} ]
		}, {
			xtype : 'checkboxgroup',
			vertical : true,
			columns : 1,
			items : [ {
				boxLabel : 'Include Deleted Material',
				itemId : 'include_deleted'
			}, {
				boxLabel : 'Include Deactive Material',
				itemId : 'include_deactive'
			} ]
		} ]
	},

	zviewmode : {
		xtype : 'radiogroup',
		itemId : 'viewmode',
		vertical : true,
		layout : 'anchor',
		defaults : {
			anchor : '100%'
		},
		items : [ {
			boxLabel : 'Last active version',
			name : 'viewmode',
			inputValue : 1,
			checked : true
		}, {
			boxLabel : 'Version to tree structure',
			name : 'viewmode',
			inputValue : 2
		}, {
			boxLabel : 'All version',
			name : 'viewmode',
			inputValue : 3
		} ]
	},

	zlist : {
		xtype : 'grid',
		itemId : 'list',
		exportTo : 'Materials',
		flex : 1,
		autoScroll : true,
		store : 'WIP.store.MaterialStore',
		features : Ext.create('Ext.grid.feature.Grouping', {
			groupHeaderTpl : '{name} ({rows.length} Version{[values.rows.length > 1 ? "s" : ""]})'
		}),
		columns : []
	},

	zcount : {
		xtype : 'textfield',
		disabled : true,
		itemId : 'listCount',
		cls : 'bottomTextField',
		flex : 1
	},

	zsearch : {
		xtype : 'textfield',
		itemId : 'searchField',
		cls : 'bottomTextField',
		flex : 3
	},

	zrefresh : {
		xtype : 'button',
		cls : 'supplementRefresh',
		itemId : 'refresh',
		width : 24
	},

	zexport : {
		xtype : 'exporterbutton',
		width : 24
	}
});