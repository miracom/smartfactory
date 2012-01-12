Ext.require([ 'Ext.ux.exporter.Exporter' ]);

/**
 * @class MBI.view.form.BaseForm1GA
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 * Form Design Function List 표시
 * 
 * **include** : MBI.view.common.BaseFormBuilder
 * @cfg {String[]} tbar refresh,clear등 이벤트 버튼설정
 * @cfg {String[]} items 표시할 ListView설정
 * @cfg {String} itemId 외부참조의 편리성을 위해 포든 item에 itemId를 부여하여 한다.
 */
Ext.define('MBI.view.form.BaseForm1GA', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mbi.baseform1g',

	plugins : [ Ext.create('CMN.plugin.Supplement') ],

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
