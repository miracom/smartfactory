Ext.define('MBI.view.form.builder.StoreBuilder',{

	constructor : function(config) {
		Ext.apply(this, config);
	},
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