Ext.define('MBI.view.form.builder.StoreBuilder',{
	//formInfoData : {},
	//facId : '',
	//funcId : '',
	//langFlag : '1',
	
	constructor : function(config) {
		Ext.apply(this, config);
	},
	buildStore : function(){
		return Ext.create('Ext.data.Store',{
			autoLoad : false,
			fields : this.buildFieldInfo(),
			proxy : this.buildProxy()
		});
	},

	buildFieldInfo : function(){
		var map = this.formInfoData.get(0).data;
		var mapdefS2Nt = map.mapdefS2Nt;
		var mapField = [];
		
		for(var i in mapdefS2Nt){
			
			mapField.push({
				name : mapdefS2Nt[i].col_code.toLowerCase(),//mapdefS2Nt[i].col_code,
				type : this.getTypeToFomat(mapdefS2Nt[i].data_type)
			});
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
		
		if (type == 'A'){
			return 'string';
		}
		else if(type == 'N'){
			return 'float';
		}
		else if(type == 'F'){
			return 'float';
		}
		else if(type == 'D'){
			return 'date';
		}
		else
			return 'auto';
	} 
});