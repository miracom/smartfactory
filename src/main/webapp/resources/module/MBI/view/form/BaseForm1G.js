Ext.define('MBI.view.form.BaseForm1G', {
	// extend: 'Ext.container.Container',
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
		// console.log('ConditionBuilder');
		// console.log(this.store.data);
		this.setSupplement(Ext.create('MBI.view.form.builder.ConditionBuilder', {
			formInfoData : this.store.data,
			facId : this.facId,
			funcId : this.funcId,
			langFlag : this.langFlag,
			client : this,
			viewHandler : this.onView
		}).buildCondition());

		this.storeInfo = Ext.create('MBI.view.form.builder.StoreBuilder', {
			formInfoData : this.store.data,
			facId : this.facId,
			funcId : this.funcId,
			langFlag : this.langFlag
		}).buildStore();
		// console.log('return : storeInfo = StoreBuilder =>');
		// console.log(storeInfo);

		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo
		}).buildGrid();
		// console.log('return : view_grid = GridBuilder =>');
		// console.log(view_grid);
		// view_condition.getForm().

		// this.add(view_condition);
		this.add(view_grid);
	},

	buildCondParam : function(params) {
		return null;//"1`^2|2`^222";
	},

	onView : function(params) {
		console.log(params);
		var extraParam = {
			fac_id : this.facId,
			func_id : this.funcId,
			spd_id : '1', // set input data for base2G
			param : null,
			cond_param : this.buildCondParam(params),
			lang_flag : this.langFlag,
		};
		this.storeInfo.load({params : extraParam});
	}

});
