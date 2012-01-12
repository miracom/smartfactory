Ext.require([ 'Ext.ux.exporter.Exporter' ]);

/**
 * @class MBI.view.form.BaseForm1G
 * @extends Ext.panel.Panel
 * one grid인 Base로 화면을 구성.
 * 
 * **include** : Ext.ux.exporter.Exporter
 * @cfg {Function} setup 화면에 필요한 기능별 panel을 만든다.
 */
Ext.define('MBI.view.form.BaseForm1G', {
	/***
	 * 부모 클래스를 정의한다.
	 */
	extend : 'Ext.panel.Panel',

	/***
	 * plugins을 설정한다.
	 */
	plugins : [ Ext.create('CMN.plugin.Supplement') ],
	
	/***
	 * 컴포넌트의 기능 관련된 설정을 한다.
	 */
	exportable : true,
	
	/***
	 * 부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다. id, title, flex, width,
	 */
	autoScroll : true,// false,
	
	/***
	 * 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 단, 복잡한 items, docked
	 * items 등은 initComponent에서 등록을 권장한다.
	 */
	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	/**
	 * @property initComponent
	 * Init Component 메쏘드를 오버라이드 한다.
	 * 1. items (정적인 컴포넌트)를 등록한다. 2. docked item들을 등록한다. 3. callParent()를 호출한다.
	 * 4. 동적인 컴포넌트와 리스너들을 등록한다.
	 */
	setup : function() {

		this.setSupplement(Ext.create('MBI.view.form.builder.ConditionBuilder', {
			formInfoData : this.store.data,
			funcId : this.funcId,
			langFlag : this.langFlag,
			client : this,
			viewHandler : this.onView
		}).buildCondition());

		this.storeInfo = Ext.create('MBI.view.form.builder.StoreBuilder', {
			formInfoData : this.store.data,
			funcId : this.funcId,
			langFlag : this.langFlag,
			spreadId : 1
		}).buildStore();

		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			flex : 1,
			spreadId : 1,
			panelId : this.id,
			clickRecord : this.onClickGrid
		}).buildGrid();
		
		var view_control = Ext.create('MBI.view.form.builder.ControlBuilder');
		this.add(view_grid);
		this.add(view_control);
			
	},
	buildToolbar : function(){
		return Ext.create('Ext.toolbar.Toolbar',{
			height : 30,
			layout : {
				type : 'hbox',
				pack : 'start'
			},
			items : [ {
				xtype : 'tbfill'
			}, {
				xtype : 'exporterbutton',
			}]
		});
	},
	
	onClickGrid : function(selModel, selected) {
    	//alert('record :'+selected[0].data.test_id); 
    },
	buildCondParam : function(params) {
		var mapconGenNt = this.store.data.get(0).data.mapconGenNt;
		var con_params = '';
		var value = '';

		for(var i in mapconGenNt){
			if (!params['C'+mapconGenNt[i].con_seq])
				 value = '';
			else
				value = params['C'+mapconGenNt[i].con_seq];
			
			if(value instanceof Array) {
				con_params += mapconGenNt[i].con_seq +'`^';
				for(var j in value)
					con_params += value[j] + '|';
			}
			else
				con_params += mapconGenNt[i].con_seq +'`^' + value + '|';
		};
		console.log(con_params);
		return con_params; //ex: '1`^1|2`^|3`^|';
	},

	onView : function(params) {
		//console.log(params);
		var extraParam = {
			func_id : this.funcId,
			spd_id : '1', // set input data for base2G
			param : null,
			cond_param : this.buildCondParam(params),
			lang_flag : this.langFlag,
		};
		this.storeInfo.load({params : extraParam});
	}

});
