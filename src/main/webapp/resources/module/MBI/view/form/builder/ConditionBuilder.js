Ext.define('MBI.view.form.builder.ConditionBuilder',{
	//extend : 'Ext.panel.Panel',
	//extend : 'Ext.container.Container',
	constructor : function(config) {
		Ext.apply(this, config);
	},
	
	buildCondition : function(){
		//console.log('getCondition');
		var fieldSet = Ext.create('MBI.view.form.builder.FieldBuilder',{
        	data : this.formInfoData.get(0).data.mapconGenNt,
        	facId : this.facId
        }).getFieldSet();

		return Ext.create('Ext.form.Panel',{

			bodyStyle : 'padding:5px',

			defaults : {
				labelAlign : 'top'
			},
			
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
					this.up('form').getForm().reset();
				}
			} ]
		});
	},
	
	handlerButtonView : function() {
		var form = this.up('form');
		this.viewHandler.apply(this.client, [form.getValues()]);
	}
});