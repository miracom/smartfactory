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
    		name : 'C'+rowData.con_seq,
		};
	},
	//no : 2
	//module/CMN/data/gcmdefine.json
	builderGcmInfo : function(colNames){
    	var arrList = [], rtnArr =[];
    	
   		arrList = colNames.split('|');

		for(var i in arrList){
			//console.log(arrList);
			var arr = arrList[i].split('^');
			//console.log(arr);
			if (arr.length<2) arr=['',''];
			rtnArr.push({
				index : arr[0],
				column : arr[1]
				});
		}
    	return rtnArr;
    },
	buildGridColumns : function(gridColumns){
		var rtnColumns=[];
		for(var i in gridColumns){
			rtnColumns.push(
				{
					header : gridColumns[i],
					dataIndex : gridColumns[i],//index,
					flex : 1
				}
			);
		}
		return rtnColumns;
	},
    getGcmColumn : function(gcmInfo,indexs){
    	var arrList = [];
    	var arrIndex = indexs.split('|');
    	var index = 0;
    	for(var i in arrIndex){
    		index = arrIndex[i];
			arrList.push(gcmInfo[index].column);
    	}
     	return arrList;
    },

	getCodeViewField : function(rowData){
		var gcmInfo = this.builderGcmInfo(rowData.gcm_col_names); //TEST_ID,TEST_NAEM.....
		var gridColumns = this.getGcmColumn(gcmInfo,rowData.con_gcm_col);//0|1 => TEST_ID,TEST_NAME
		var refGcmCol = (rowData.con_gcm_ref_col?gcmInfo[rowData.con_gcm_ref_col].column:'');
		var refField = (rowData.con_gcm_ref_col?'C'+rowData.con_ref_col:'');

		return {
			xtype : 'codeview',
			selectorName : 'GcmCodeView',
			fieldLabel : rowData.display_text,
			//'$1'==> :X1
			filter : [],
			table : rowData.con_gcm_table_code,
			txtFieldName : gcmInfo[rowData.con_gcm_val].column, //displayField와 동일하게 사용
			//txtFieldName : ['TEST_ID','TEST_NAME'], //displayField와 동일하게 사용
			txtFieldFlex : [1],
			bInitFilter: true,
			title : rowData.display_text,
			columns : this.buildGridColumns(gridColumns),
			selects : gridColumns,
			name : 'C'+rowData.con_seq,
			refGcmCol : refGcmCol,
			refField : refField
		};
	},
	//no : 3
	getComboBoxField : function(rowData){
		return Ext.create('CMN.view.form.GCMComboBox', {
			labelAlign : 'top',
			fieldLabel : rowData.display_text,
			name : 'C'+rowData.con_seq,
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
			xtype : 'datetimex',
			fieldLabel : rowData.display_text,
			name : 'C'+rowData.con_seq,
    		type : 'date'
    		//maxValue : new Date(), // limited to the current date or prior
    		//value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		};
	},
	//no : 5
	getDateToField : function(rowData){
		return {
			xtype : 'dateperiod',
			fieldLabel : rowData.display_text,
			name : 'C'+rowData.con_seq,
    		//value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		};
	},
	//no : 6
	getDateTimeField : function(rowData){
		return {
			xtype : 'datetimex',
			fieldLabel : rowData.display_text,
			name : 'C'+rowData.con_seq,
    		type : 'datetime'
    		//value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		};
	},
	//no : 7
	getDateTimeToField : function(rowData){
		return {
			xtype : 'datetimeperiod',
			fieldLabel : rowData.display_text,
			name : 'C'+rowData.con_seq,
    		//value : Ext.Date.add(new Date(), Ext.Date.DAY, rowData.con_default_date1) //defaults to today
		};
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
				name : 'C'+rowData.con_seq,
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
    		name : 'C'+rowData.con_seq,
    		//id : 'date_'+rowData.display_text.toLowerCase(),
    		anchor : '100%',
    		allowBlank : false
		};
	},

});