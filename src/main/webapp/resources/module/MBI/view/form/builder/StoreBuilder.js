Ext.define('MBI.view.form.builder.GridBuilder',{
	formInfoData : {},
	buildStore : function(){
		return {
			autoLoad : false,
			fields : this.buildFieldInfo(),
			proxy : this.buildProxy()
		};
	},
	buildFieldInfo : function(){
		
	},
	buildProxy : function(){
		
	}

	
});