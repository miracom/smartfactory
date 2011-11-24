Ext.define('MBI.view.form.builder.GridBuilder',{
	formInfoData : {},
	buildColumn : function(){
		
	},
	buildGrid : function(){
		return {
			xtype : 'grid',
			store : this.store,
			title : this.getTitle(),
			column : this.buildColumn()
		};
	},
	getTitle : function(){
		
	}
	
});