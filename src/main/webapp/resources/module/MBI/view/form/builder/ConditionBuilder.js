Ext.define('MBI.view.form.builder.ConditionBuilder',{
	//extend : 'Ext.panel.Panel',
	//extend : 'Ext.container.Container',
	constructor : function(config) {
		Ext.apply(this, config);
	},
	
	buildCondition : function(){
		//console.log('getCondition');
		return Ext.create('Ext.panel.Panel',{
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
		        //defaultType: 'textfield',
		        //defaultType: 'datefield',
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
		        items: [this.getItems()]
		    }],	
		});
	},
	
    getItems : function(){
    	//console.log('getItems');
    	var mapconGenNt = this.formInfoData.get(0).data.mapconGenNt;
    	var mapItems = [];
    	//[ "0", "1", "2", "3", "4", "5", "6", "7", "8" ],
    	//[ "CheckBox", "CodeView", "ComboBox", "Date", "DateTo", "DateTime", "DateTimeTo", "RadioButton", "TextBox" ]
    	var controlType = ["", "checkboxfield", "searchfield","comboboxfield", "datefield", "DateTo", "DateTime", "DateTimeTo", "radiofield", "textfield"];
    	//console.log(mapconGenNt);
    	for(var i in mapconGenNt){
//				mapItems.push({
//				//xtype : controlType[consqlGenNt[i].con_display_type],
//				xtype: 'textfield',
//				name : mapconGenNt[i].display_text,
//				fieldLabel : mapconGenNt[i].display_text
//				});
    		console.log(mapconGenNt[i].con_display_type);
    		if (mapconGenNt[i].con_display_type == '5'){
	    		mapItems.push({
	    			items : [{
			    			xtype : 'datefield',
			    			name : mapconGenNt[i].display_text+'_from',
			    			fieldLabel : mapconGenNt[i].display_text+' FROM'
			    		},{
			    			xtype : 'datefield',
			    			name : mapconGenNt[i].display_text+'_to',
			    			fieldLabel : mapconGenNt[i].display_text+' TO'
			    		}]
    			});
    		}
    		else if (mapconGenNt[i].con_display_type == '6'){
    			mapItems.push({

    				items : [{
    						xtype : 'datefield',
    						name : mapconGenNt[i].display_text+'_date',
    						fieldLabel : mapconGenNt[i].display_text+ ' DATE'
    					},{
    						xtype : 'timefield',
    						name : mapconGenNt[i].display_text+'_time',
    						fieldLabel : mapconGenNt[i].display_text+ ' TIME'
    					}]
	    		});
    		}
    		else if (mapconGenNt[i].con_display_type == '7'){
    			mapItems.push({
					items : [{
						xtype : 'datefield',
						name : mapconGenNt[i].display_text+'_datefrom',
						fieldLabel : mapconGenNt[i].display_text+ ' DATE'
					},{
						xtype : 'timefield',
						name : mapconGenNt[i].display_text+'_timefrom',
						fieldLabel : mapconGenNt[i].display_text+ ' TIME'
					},{
						xtype : 'datefield',
						name : mapconGenNt[i].display_text+'_dateto',
						fieldLabel : mapconGenNt[i].display_text+ ' DATE'
					},{
						xtype : 'timefield',
						name : mapconGenNt[i].display_text+'_timeto',
						fieldLabel : mapconGenNt[i].display_text+ ' TIME'
					}]
    			});
    		}
    		else {
    			mapItems.push({
	    			//xtype : controlType[consqlGenNt[i].con_display_type],
    				xtype : 'textfield',
	    			name : mapconGenNt[i].display_text,
	    			fieldLabel : mapconGenNt[i].display_text
	    		});
    		}
    	};
    	//console.log('mapItems');
    	//console.log(mapItems);
    	return mapItems;
    }
});