Ext.require([ 'Ext.ux.exporter.Exporter' ]);

/**
 * @class MBI.view.form.BaseForm1GA
 * 하나의 chart 와 grid를 가지는 화면 구성.
 * 
 * **include** : Ext.ux.exporter.Exporter
 * 
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 * 
 * @cfg {Boolean} exportable excel의 출력여부를 설정한다.
 */
Ext.define('MBI.view.form.BaseForm1GA', {
	/*부모 클래스를 정의한다.*/
	extend : 'Ext.panel.Panel',
	
	/*외부에서 참조할 plugins를 설정한다.*/
	plugins : [ Ext.create('CMN.plugin.Supplement') ],
	
	/*컴포넌트의 기능 관련된 설정을 한다.*/
	exportable : true,
	
	/*부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다. id, title, flex, width*/
	autoScroll : true,// false,
		
	/* 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 단, 복잡한 items, docked
	  items 등은 initComponent에서 등록을 권장한다.*/
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	autoScroll : true,// false,
	
	setup : function() {
		// this.removeAll();
		
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
		
		var view_chart = Ext.create('MBI.view.form.builder.ChartBuilder',{
			//TODO input config info
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			layoutType : 'hbox',
			flex : 2,
			spreadId : 1,
		}).buildChart(1);
		
		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			flex : 1,
			spreadId : 1,
			panelId : this.id,
			clickRecord : this.onClickGrid
		}).buildGrid();

		if (view_chart)
			this.add(view_chart);
//		this.add({
//	        xtype: 'splitter'   // A splitter between the two child items
//	    });
		this.add(view_grid);
	},
	onClickGrid : function(selModel, selected) {
    	//alert('record :'+selected[0].data.test_id); 
    },
	buildCondParam : function(params) {
		var mapconGenNt = this.store.data.get(0).data.mapconGenNt;
		var con_params = '';
		var value = '';
		//console.log(params);
		for(var i in mapconGenNt){
			if (!params[mapconGenNt[i].display_text.toLowerCase()])
				 value = '';
			else
				value = params[mapconGenNt[i].display_text.toLowerCase()];
			
			con_params += mapconGenNt[i].con_seq +'`^' + value + '|';
		};
		console.log(con_params);
		return con_params; //ex: '1`^1|2`^|3`^|';
	},
	/**
	 * conditon form에서 'view' 클릭시 해당조건을 읽어와 store를 다시 읽어 온다.
	 * @param params
	 */
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
