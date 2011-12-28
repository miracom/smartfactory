Ext.define('MBI.view.form.builder.GridBuilder',{
	//formInfoData : {},
	constructor : function(config) {
		Ext.apply(this, config);
	},
	buildGrid : function(){
		//return Ext.create('Ext.panel.Panel',{
		return Ext.create('Ext.container.Container',{
			bodyPadding: 3,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			flex : this.flex,
			items :[{
                xtype: 'tabpanel',
                flex : 1,
                plain: true,
                items: [{
                    title: this.getTitle(1),
                    bodyPadding: 3,
                    items : [{
                    	xtype : 'grid',
						store : this.store,
						selModel: Ext.create('Ext.selection.CheckboxModel'),
//					    selModel: Ext.create('Ext.selection.CheckboxModel',{ 
//					    	listeners:{ 
//					    		selectionchange: function(selModel, selected) {
//					    			if (selected.length) alert('record :'+selected[0]);
//			                	}
//					    	}
//			            }),
						columns : this.buildColumn(),
						columnLines : true,
						autoScroll : true,
				        viewConfig: {
				            forceFit: true
				        },
				        split: true,
				        height : '100%',
				        clickRecord : this.clickRecord,
						listeners: {
			                selectionchange: function(selModel, selected) {
			                	if (selected.length){
			                		this.clickRecord.apply(this.client, [selModel, selected]);
			                	}
			            	}
			            }
                    }]
                }]
			}]
		});
	},

	//Display_Type = { "0", "1", "2", "3", "4", "5", "6", "7", "8" }
	//{ "CodeView", "CheckBox", "ComboBox", "Date", "DateTime", "Edit", "Int", "Number", "Time" }
	buildColumn : function(){
		//var map = this.formInfoData.get(0).data;
		var mapdefS2Nt = this.formInfoData.get(0).data.mapdefS2Nt;
		var mapColums = [];
		var alignList = ['left', 'right','center'];
		
		mapColums.push(Ext.create('Ext.grid.RowNumberer'));
		// hidden flag 추가
		for(var i in mapdefS2Nt){
			//if (mapdefS2Nt[i].spread_level == this.spreadLevel){
			if (mapdefS2Nt[i].spread_id == this.spreadId && mapdefS2Nt[i].col_code){
					
				if (mapdefS2Nt[i].display_type == 4 ){
					mapColums.push({
						dataIndex : mapdefS2Nt[i].col_code.toLowerCase(),
						text : mapdefS2Nt[i].col_alias1,
						width : mapdefS2Nt[i].col_width,
						align : alignList[mapdefS2Nt[i].align_type],
						xtype: 'datecolumn',   
						format:'Y-m-d' 
					});
				}
				else{
					mapColums.push({
						dataIndex : mapdefS2Nt[i].col_code.toLowerCase(),
						text : mapdefS2Nt[i].col_alias1,
						width : mapdefS2Nt[i].col_width,
						align : alignList[mapdefS2Nt[i].align_type],
						editor : {
							xtype : 'textField',
			    			allowBlank: false
			    			}
					});
				}
			}
		};
		return mapColums;
	},
	getTitle : function(lang_flag){
		var mapdefS2Nt =  this.formInfoData.get(0).data.mapdefS2Nt;
		//if (lang_flag == 2) return 	mapdefS2Nt[0].tab_text2;
		//if (lang_flag == 3) return 	mapdefS2Nt[0].tab_text3;
		//else return 	mapdefS2Nt[0].tab_text1;
		return '[ '+mapdefS2Nt[0].tab_text1+' ]';
	}
	
});