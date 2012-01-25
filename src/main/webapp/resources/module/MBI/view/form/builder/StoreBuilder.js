/**
 * @class MBI.view.form.builder.StoreBuilder
 * @author Kyunghyang
 * 화면에서 조회한 정보를 가져온다. 
 *   @example
 *	 Ext.define('BaseFomeTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *		
 *	 	initComponent : function() {
 *			this.callParent();
 *			this.items : [this.zgrid],
 *			this.storeInfo : this.getStore
 *		},
 *
 *		onClickGrid : function(selModel, selected) {
 *   		alert('record :'+selected[0].data.test_id); 
 *    	},
 *
 *		getStore : Ext.create('MBI.view.form.builder.StoreBuilder', {
 *			formInfoData : this.store.data,
 *			funcId : this.funcId,
 *			langFlag : this.langFlag,
 *			spreadId : 1
 *		}).buildStore();
 *		
 *	 	zgrid : function(){
 *			return Ext.create('MBI.view.form.builder.GridBuilder', {
 *			formInfoData : this.store.data,
 *			langFlag : this.langFlag,
 *			store : this.storeInfo,
 *			flex : 1,
 *			spreadId : 1,
 *			panelId : this.id,
 *			clickRecord : this.onClickGrid
 *		}).buildGrid();
 *
 *   });
 * 
 * @cfg {Object} formInfoData Chart의 구성요소 설정 정보
 * @cfg {Number} langFlag 표시되는 언어 (1:영어/2:한국어/3:기타언어)
 * @cfg {Object} funcId function id
 * @cfg {Number} spreadId grid를 구분하기위한 ID
 * 
 */
Ext.define('MBI.view.form.builder.StoreBuilder',{

	constructor : function(config) {
		Ext.apply(this, config);
	},
	/**
	 * 화면에서 조회된 데이터
	 * @returns Store
	 */
	buildStore : function(){
		return Ext.create('Ext.data.Store',{
			autoLoad : false,
//			remoteFilter : true,
//			filterOnLoad : false,
			//pageSize : 100,
			fields : this.buildFieldInfo(),
			proxy : this.buildProxy()
		});
	},

	buildFieldInfo : function(){
		var map = this.formInfoData.get(0).data;
		var mapdefS2Nt = map.mapdefS2Nt;
		var mapField = [];

		for(var i in mapdefS2Nt){
			if (mapdefS2Nt[i].spread_id == this.spreadId && mapdefS2Nt[i].col_code){
				var type = this.getTypeToFomat(mapdefS2Nt[i].display_type);
				if(type == 'date'){
					mapField.push({
						name : mapdefS2Nt[i].col_code.toLowerCase(),//mapdefS2Nt[i].col_code,
						type : type,
						dateFormat : 'time'

					});	
				}
				else{
					mapField.push({
						name : mapdefS2Nt[i].col_code.toLowerCase(),//mapdefS2Nt[i].col_code,
						type : type
					});
				}
				
			}
		};
		return mapField;
	},

	buildProxy : function(){
		return {
			type: 'ajax',
			url : 'module/MBI/data/dynamic_s2_nt.json',
			
			reader: {
				type: 'json'
			}
		};
	},
	
	buildParam : function(){
		//init data is null
		return '';
	},
	buildCondParam : function(){
		//init data is null
		return '';
	},
	getTypeToFomat : function(type){
		
		if (type == '5'){
			return 'string';
		}
		else if(type == '6'){
			return 'float';
		}
		else if(type == '4' || type == '3'){
			return 'date';
		}
		else
			return 'auto';
	} 
});