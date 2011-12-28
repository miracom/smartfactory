Ext.define('MBI.view.form.BaseForm2G', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mbi.baseform2g',

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

		var viewGrid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			flex : 1,
			spreadId : 1,
			clickRecord : this.onClickGrid
		}).buildGrid();

		this.storeDetailInfo = Ext.create('MBI.view.form.builder.StoreBuilder', {
			formInfoData : this.store.data,
			funcId : this.funcId,
			langFlag : this.langFlag,
			spreadId : 2
		}).buildStore();
		
		var viewGridDetail = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeDetailInfo,
			spreadId : 2,
			flex : 1,
			clickRecord : this.onClickGridDetail
		}).buildGrid();
		
		this.add(viewGrid);
		this.add(viewGridDetail);
	},
    buildWhereParam : function(spdId,selected){
    	// Design_ID`^Value
    	var where_params = '';
//    	var consqlGenNt = this.storeDetailInfo.data.get(0).data.consqlGenNt;
//    	//consqlGenNt = consqlGenNt.sort('left_seq_no','ASC');
//    	for(i in consqlGenNt){
//    		if (consqlGenNt[i].spread_id == spd_id){
//    			var lCol = this.getColumn(consqlGenNt[i].left_col);
//    			var rCol = this.getColumn(consqlGenNt[i].right_col);
//    			if (lCol.length > 0)
//    				where_params += consqlGenNt[i].left_dsgn_id +'`^'+ selected[0].data[lCol] +'|';
//    			else if (rCol.length > 0) 
//    				where_params += consqlGenNt[i].right_dsgn_id +'`^'+ selected[0].data[rCol] +'|';
//    		} 
//    	}
    	return where_params;
    },
	onClickGrid : function(selModel, selected) {
		//console.log(selected[0].data.test_id);
		var spdId = '2';
		alert('record 2:'+selected[0]);
		var kk = this.buildWhereParam(spdId,selected);
		console.log(kk);
//		var extraParam = {
//				func_id : this.funcId,
//				spd_id : spdId, // set input data for base2G
//				param : kk,
//				cond_param :'',//this.buildCondParam(params),
//				lang_flag : this.langFlag,
//			};
//		this.storeDetailInfo.load({params : extraParam});
    },
    onClickGridDetail : function(selModel, selected) {
    	console.log(selected);
    	alert('record 2:'+selected[0]);
    },    

	getColumn : function(index){
		if (index == null) return null;
		var mapdefS2Nt = this.formInfoData.get(0).data.mapdefS2Nt;

		var indexList =  index.split('.');
		for(i in mapdefS2Nt){
			if(indexList[0] == mapdefS2Nt[i].spread_id && indexList[1] == mapdefS2Nt[i].seq_no){
				return mapdefS2Nt[i].col_code.toLowerCase();
			}
		}
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