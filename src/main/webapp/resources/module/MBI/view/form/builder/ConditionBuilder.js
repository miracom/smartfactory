Ext.define('MBI.view.form.builder.ConditionBuilder',{
	//extend : 'Ext.panel.Panel',
	//extend : 'Ext.container.Container',
	constructor : function(config) {
		Ext.apply(this, config);
	},
	
	buildCondition : function(){
		//console.log('getCondition');
		var fieldSet = Ext.create('MBI.view.form.builder.FieldBuilder',{
        	data : this.formInfoData.get(0).data.mapconGenNt
        }).getFieldSet();

		return Ext.create('Ext.form.Panel',{
		//return Ext.create('Ext.container.Container',{
			bodyStyle:'padding:3px 3px 0',
			//fieldDefaults: {
		    //    msgTarget: 'side',
		    //    labelWidth: 80
		    //},
	        layout: {
	        	 type: 'vbox',
	        	 align : 'stretch'	        		 
	        },
		    items: fieldSet,
		    buttons : [ {
				text : 'View',
				client : this.client,
				viewHandler : this.viewHandler,
				handler : this.handlerButtonView
			}, {
				text : 'Reset',
				handler : function() {
					
				}
			} ]
		});
	},
	
	handlerButtonView : function() {
		var form = this.findParentByType('form');
		this.viewHandler.apply(this.client, [form.getValues()]);
	}
});