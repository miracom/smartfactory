Ext.define('MBI.view.form.builder.FieldBuilder',{
	//data[];
	constructor : function(config) {
		Ext.apply(this, config);
	},
	//[ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
	//[ "", "CheckBox", "CodeView", "ComboBox", "Date", "DateTo", "DateTime", "DateTimeTo", "RadioButton", "TextBox" ]
	//controlType : ["textfield", "checkboxfield", "CodeView","comboboxfield", "datefield", "DateTo", "DateTime", "DateTimeTo", "radiofield", "textfield"],

	getFieldSet : function(){
		var mapItems = [];
		for(var i in this.data){
			mapItems.push(
				this.getFieldAt(this.data[i])
			);
		};
		return mapItems;
	},
	
	getFieldAt : function(rowData){
		var fieldType = rowData.con_display_type;
		//console.log(fieldType);
		switch (fieldType) {
		  case '1'    : return this.getCheckBoxField(rowData);
		  case '2'    : return this.getCodeViewField(rowData);
		  case '3'    : return this.getComboBoxField(rowData);
		  case '4'    : return this.getDateField(rowData);
		  case '5'    : return this.getDateToField(rowData);
		  case '6'    : return this.getDateTimeField(rowData);
		  case '7'    : return this.getDateTimeToField(rowData);
		  case '8'    : return this.getRadioButtonField(rowData);
		  default     : return this.getTextBoxField(rowData);
		}
	}, 
	
	//no : 1
	getCheckBoxField : function(rowData){
		return {
    		xtype : 'checkboxfield',
    		boxLabel : rowData.display_text,
    		name : rowData.display_text.toLowerCase()
		};
	},
	//no : 2
	getCodeViewField : function(rowData){
		return {
			xtype : 'codeview',
			selectorName : 'Material',
			filter : [ {
				property : 'factory',
				value : SmartFactory.login.factory()
			} ],
			txtFieldName : ['MAT_ID', 'MAT_VER'], //displayField와 동일하게 사용
			txtFieldWidth : [2, 1],
			bInitFilter: false,
			title : 'Product ID'
		};
	},
	//no : 3
	getComboBoxField : function(rowData){
		return Ext.create('CMN.view.form.GCMComboBox', {
			labelAlign : 'top',
			fieldLabel : rowData.display_text,
			name : rowData.display_text.toLowerCase(),
			queryMode : 'local',
			displayField : rowData.con_gcm_col.toLowerCase(),
			valueField : rowData.con_gcm_val.toLowerCase(),
			tableName : rowData.con_gcm_table_code,
			value : '' //default value 
		});
	},
	//no : 4
	getDateField : function(rowData){
		return {
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text,
    		name : rowData.display_text.toLowerCase(),
    		//id : 'date_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'Y-m-d',
    		maxValue : new Date(), // limited to the current date or prior
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		};
	},
	//no : 5
	getDateToField : function(rowData){
		return [{
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text +' From',
    		name : rowData.display_text.toLowerCase()+'_from',
    		//id : 'datefrom_'+rowData.display_text.toLowerCase(),
    		
    		anchor : '100%',
    		format : 'Y-m-d',
    		maxValue : new Date(), // limited to the current date or prior
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		},{
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text + ' To',
    		name : rowData.display_text.toLowerCase()+'_to',
    		//id : 'dateto_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'Y-m-d',
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date2) //defaults to today
		}];
	},
	//no : 6
	getDateTimeField : function(rowData){
		return [{
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text +' Date',
    		name : rowData.display_text.toLowerCase() + '_date',
    		//id : 'date_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'Y-m-d',
    		maxValue : new Date(), // limited to the current date or prior
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		},{
    		xtype : 'timefield',
    		fieldLabel : rowData.display_text+' Time',
    		name : rowData.display_text.toLowerCase() + '_time',
    		//id : 'time_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'H:i',
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		}];
	},
	//no : 7
	getDateTimeToField : function(rowData){
		return [{
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text +' Date Form',
    		name : rowData.display_text.toLowerCase() + '_dateform',
    		//id : 'dateform_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'Y-m-d',
    		maxValue : new Date(), // limited to the current date or prior
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		},{
    		xtype : 'timefield',
    		fieldLabel : rowData.display_text+' Time Form',
    		name : rowData.display_text.toLowerCase() + '_timeform',
    		//id : 'timeform_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'H:i',
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		},{
    		xtype : 'datefield',
    		fieldLabel : rowData.display_text +' Date To',
    		name : rowData.display_text.toLowerCase() + '_dateto',
    		//id : 'dateto_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'Y-m-d',
    		maxValue : new Date(), // limited to the current date or prior
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		},{
    		xtype : 'timefield',
    		fieldLabel : rowData.display_text+' Time To',
    		name : rowData.display_text.toLowerCase() + '_timeto',
    		//id : 'timeto_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		format : 'H:i',
    		value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		}];
	},
	//no : 8
	getRadioButtonField : function(rowData){
		var itemList = this.getRadioItem(rowData);
		return {
			xtype: 'fieldset',
	        title: rowData.display_text,
	        layout: 'anchor',
	        defaults: {
	            anchor: '100%'
	        },
	        items : [{
	            xtype: 'radiogroup',
	            layout: 'anchor',
	            items: itemList,
	        }]
		};
	},
	getRadioItem : function(rowData){
		var dataIndex = 0;
		var valueIndex = 1;
		
		var radioList = [];
		//a|size|N|b|size|N  ==> label|value|checked
		//4updatetimea1 ==> con_position + display_text + iIndex(radio no)
		var s = rowData.con_radio_val;
		if (s == null) s = '1|1|N|2|2|N';
		var radioData =  s.split('|');

		for (dataIndex=0; dataIndex<radioData.length ; dataIndex+=3){
			var value = radioData[valueIndex];
			radioList.push({
				boxLabel : radioData[dataIndex],
				name : rowData.display_text.toLowerCase(),
				inputValue : radioData[valueIndex],
				//id : rowData.display_text+'_radio'+dataIndex
			});
			valueIndex += 3;
		};
		return radioList;
	},
	//no : 9
	getTextBoxField : function(rowData){
		return {
    		xtype : 'textfield',
    		fieldLabel : rowData.display_text,
    		name : rowData.display_text.toLowerCase(),
    		//id : 'date_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		allowBlank : false
		};
	},

});