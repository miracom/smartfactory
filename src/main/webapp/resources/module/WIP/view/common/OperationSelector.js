Ext.require('Ext.ux.exporter.Exporter');

Ext.define('WIP.view.common.OperationSelector', {
	/*
	 * 부모 클래스를 정의한다.
	 */
	extend : 'Ext.panel.Panel',

	/*
	 * plugins을 설정한다.
	 */
	plugins : [ ],
	
	/*
	 * 컴포넌트의 기능 관련된 설정을 한다.
	 */
	exportable : true,

	/*
	 * common 뷰인 경우에는 Alias를 정의한다.
	 */
	alias : 'widget.wip_operation_selector',

	/*
	 * 컴포넌트 Identification과 관련된 속성을 정의한다. id, title
	 */
	title : 'Find Operation',

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
		this.items = [ this.zgrid ];
		this.bbar = [ this.zcount, this.zsearch, this.zrefresh, this.zexport ];

		/*
		 * 부모의 컴포넌트 초기화 기본 로직을 호출한다.
		 */
		this.callParent();
		
		/*
		 * Observable 관련 등록 (이벤트 등록 등)
		 */
		this.addEvents({
            "operationselected" : true
        });

		/*
		 * 부가적인 작업을 한다. - 동적인 컴포넌트 추가 - 리스너 등록
		 */
		var self = this;

		this.on('render', function() {
			self.refreshGrid(true);
		});

		this.sub('grid').store.on('datachanged', function(store) {
			self.sub('gridCount').setValue(store.count());
		});

		this.sub('searchField').on('specialkey', function(field, e) {
			if (e.getKey() == e.ENTER) {
				self.refreshGrid(false);
			}
		});

		this.sub('refresh').on('click', function() {
			self.refreshGrid(true);
		});

		this.sub('grid').on('itemclick', function(grid, record) {
			self.fireEvent('operationselected', record);
		});
	},

	getGridLocalFilters : function() {
		var filters = [];
		var value = this.sub('searchField').getValue();
		if (value.length > 0) {
			filters.push({
				property : 'oper_id',
				value : new RegExp(this.sub('searchField').getValue())
			});
		}
		return filters;
	},

	refreshGrid : function(reload) {
		var store = this.sub('grid').store;
		this.sub('grid').reconfigure(null, [ {
			text : 'Operation',
			flex : 1,
			dataIndex : 'oper_id'//'OPER'
		}, {
			text : 'Desc',
			flex : 1,
			dataIndex : 'desc'//'OPER_DESC'
		} ]);

		store.clearFilter(true);
		store.filter(this.getGridLocalFilters());
		if (reload)
			store.load();
	},

	zgrid : {
		xtype : 'grid',
		itemId : 'grid',
		exportTo : 'Materials',
		flex : 1,
		autoScroll : true,
		store : 'WIP.store.OperationListStore',
		features : Ext.create('Ext.grid.feature.Grouping', {
			groupHeaderTpl : '{name} ({rows.length} Version{[values.rows.length > 1 ? "s" : ""]})'
		}),
		columns : []
	},

	zcount : {
		xtype : 'textfield',
		disabled : true,
		itemId : 'gridCount',
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
