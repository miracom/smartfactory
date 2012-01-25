Ext.require([ 'Ext.ux.exporter.Exporter' ]);

/**
 * @class MBI.view.form.BaseForm2G
 * 상단 하단의 tab구성에 하단의 각 tab별 하나의 grid를 가지는 화면 구성.
 * 상단 tab : 하나의 grid를 설정 할 수 있다.
 * 하단 tab : 상단의 grid에 종속되며 여러 tab을 설정 할 수 있다.
 * 
 * **include** : Ext.ux.exporter.Exporter
 * 
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 * 
 * @cfg {Boolean} exportable excel의 출력여부를 설정한다.
 */
Ext.define('MBI.view.form.BaseForm2G', {
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
		this.add(this.buildToolbar());
		
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
	
	/**
	 * conditon form에서 'view' 클릭시 해당조건을 읽어와 store를 다시 읽어 온다.
	 * 또한 상단의 grid의 record를 선택 또는 변경시 하단의 grid가 조회된다.
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