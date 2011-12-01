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
		console.log('fieldSet');
		console.log(fieldSet);
		return Ext.create('Ext.form.Panel',{
		//return Ext.create('Ext.container.Container',{
			bodyStyle:'padding:3px 3px 0',
			//fieldDefaults: {
		    //    msgTarget: 'side',
		    //    labelWidth: 80
		    //},
		
		    items: [{
		        xtype:'fieldset',
		        title: 'condition view',
		        collapsible: true,
		        layout: {
		        	 type: 'hbox'
		        },
		        
		        defaults: {
		            //labelWidth: 100,
		            // implicitly create Container by specifying xtype
		            //flex: 1,
		            style: {
		                padding: '5px'
		            }
		        },
		        items : fieldSet
		    }],	
		});
	},
});