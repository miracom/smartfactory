Ext.define('MBI.view.form.BaseForm1G', {
	//extend: 'Ext.container.Container',
	extend: 'Ext.panel.Panel',
	alias: 'widget.mbi.baseform1g',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	autoScroll: true,//false,
	constructor : function(config){
		this.refreshItems();
		MBI.view.form.BaseForm1G.supperclass.constructor.call(this, config);
	},

	refreshItems : function() {
		this.removeAll();
		//console.log('ConditionBuilder');
		//console.log(this.store.data);
		this.view_condition = Ext.create('MBI.view.form.builder.ConditionBuilder',{
			formInfoData : this.store.data,
			facId : this.facId,
			funcId : this.funcId,
			langFlag : this.langFlag
		}).buildCondition();
		
		var storeInfo = Ext.create('MBI.view.form.builder.StoreBuilder',{
			formInfoData : this.store.data,
			facId : this.facId,
			funcId : this.funcId,
			langFlag : this.langFlag
		}).buildStore();
		storeInfo.load();
//console.log('return : storeInfo = StoreBuilder =>');
//console.log(storeInfo);
		
		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder',{
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : storeInfo			
		}).buildGrid();  
//console.log('return : view_grid = GridBuilder =>');		
//console.log(view_grid);
		//view_condition.getForm().
		

		//this.add(view_condition);
		this.add(view_grid);
	}
});
