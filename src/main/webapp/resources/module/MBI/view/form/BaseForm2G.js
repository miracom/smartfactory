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
		//console.log
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
			panelId : this.id,
			clickRecord : this.onClickGrid
		}).buildGrid();
		
		var mapdefS2Nt = new Ext.util.MixedCollection();
		mapdefS2Nt.addAll(this.store.data.get(0).data.mapdefS2Nt);
		var spdFilter = new Ext.util.Filter({
			property : 'spread_level',
			value : 2
		});
		var detailMapdefS2Nt = mapdefS2Nt.filter(spdFilter);
		this.spreadId = [];
		var id = 0;
		var index = 0;
		for(var i in detailMapdefS2Nt.items){
			if( id != detailMapdefS2Nt.items[i].spread_id){
				this.spreadId[index] = detailMapdefS2Nt.items[i].spread_id;
				id = this.spreadId[index];
				index++;
			}
		}
		this.storeDetailInfo = [];
		for(var i in this.spreadId){
			this.storeDetailInfo.push(Ext.create('MBI.view.form.builder.StoreBuilder', {
				formInfoData : this.store.data,
				funcId : this.funcId,
				langFlag : this.langFlag,
				spreadId : this.spreadId[i]
			}).buildStore());	
		}
//		this.storeDetailInfo = Ext.create('MBI.view.form.builder.StoreBuilder', {
//			formInfoData : this.store.data,
//			funcId : this.funcId,
//			langFlag : this.langFlag,
//			spreadId : 2
//		}).buildStore();
		var viewGridDetail = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeDetailInfo,
			spreadId : this.spreadId,
			flex : 1,
			clickRecord : this.onClickGridDetail,
		}).buildGrid();

		this.add(viewGrid);
		this.add(viewGridDetail);
	},

	onClickGrid : function(selModel, selected) {
		//console.log(selected[0].data.test_id);
		//alert('record 2:'+selected[0]);
    	
		for(var i in this.spreadId){
			if(this.spreadId[i] > 0){
				var params = this.buildWhereParam(this.spreadId[i],selected);
				var extraParam = {
						func_id : this.funcId,
						spd_id : this.spreadId[i], // set input data for base2G
						param : params,
						cond_param :'',//this.buildCondParam(params),
						lang_flag : this.langFlag,
					};
				this.storeDetailInfo[i].load({params : extraParam});
			}
		}
    },
    //3G선언
    onClickGridDetail : function(selModel, selected) {
    	//console.log(selected);
    	//alert('record 2:'+selected[0]);
    },   
    
    buildWhereParam : function(spdId,selected){
    	if(!selected) return '';
    	// Design_ID`^Value
    	var where_params = '';
    	var consqlGenNt = this.store.data.get(0).data.consqlGenNt;
    	//sort : left_seq_no
    	//consqlGenNt = consqlGenNt.sort('left_seq_no','ASC');

    	for(i in consqlGenNt){
    		if (consqlGenNt[i].spread_id == spdId){
    			var lCol = this.getColumn(consqlGenNt[i].left_col);
    			var rCol = this.getColumn(consqlGenNt[i].right_col);
    			if (lCol)
    				where_params += consqlGenNt[i].left_dsgn_id +'`^'+ selected[0].data[lCol] +'|';
    			else if (rCol) 
    				where_params += consqlGenNt[i].right_dsgn_id +'`^'+ selected[0].data[rCol] +'|';
    		} 
    	}
    	console.log(where_params);
    	return where_params;
    },
	getColumn : function(index){
		if (index == '' || index == '.') return '';
		var mapdefS2Nt = this.store.data.get(0).data.mapdefS2Nt;

		var indexList =  index.split('.');
		for(i in mapdefS2Nt){
			if(indexList[0] == mapdefS2Nt[i].spread_id && indexList[1] == mapdefS2Nt[i].seq_no){
				return mapdefS2Nt[i].col_code.toLowerCase();
			}
		}
	},
	buildCondParam : function(params) {
		var mapconGenNt = this.store.data.get(0).data.mapconGenNt;
		var condparams = '';
		var value = '';

		for(var i in mapconGenNt){
			if (!params['C'+mapconGenNt[i].con_seq])
				 value = '';
			else
				value = params['C'+mapconGenNt[i].con_seq];
			
			if(value instanceof Array) {
				condparams += mapconGenNt[i].con_seq +'`^';
				for(var j in value)
					condparams += value[j] + '|';
			}
			else
				condparams += mapconGenNt[i].con_seq +'`^' + value + '|';
		};
		console.log(condparams);
		return condparams; //ex: '1`^1|2`^|3`^|';
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
		this.storeInfo.load({
			params : extraParam,
			scope  : this,
			callback: function(records, operation, success) {
				if (success && records.length>0){
					this.onClickGrid('',[records[0]]);
				}
			}
		});
	}
});