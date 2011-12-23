Ext.define('MBI.view.form.BaseForm1G', {
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
			langFlag : this.langFlag
		}).buildStore();

		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			flex : 1
		}).buildGrid();

		this.add(view_grid);
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
