Ext.define('MBI.view.form.builder.GridBuilder',{
	//formInfoData : {},
	constructor : function(config) {
		Ext.apply(this, config);
	},
	buildGrid : function(){
		var storeDetail = this.store;
		//this.storeDetailInfo
		return Ext.create('Ext.container.Container',{
			bodyPadding: 3,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			flex : this.flex,
			items :{
                xtype: 'tabpanel',
                flex : 1,
                plain: true,
    			layout : {
    				type : 'vbox',
    				align : 'stretch'
    			},
			
                items:this.buildTab(storeDetail) 
            },
		});
	},
	buildTab : function(storeDetail){
		var items = [];
		if(this.spreadId instanceof Array) {
			for(var i in this.spreadId){
				items.push({   
					title: this.getTitle(1,this.spreadId[i]),
	                bodyPadding: 3,
	                layout : 'fit',
	                items : [{
	                	xtype : 'grid',
	                	exportTo : this.getTitle(1,this.spreadId[i]),
						store : storeDetail[i],
						selModel: Ext.create('Ext.selection.CheckboxModel'),
						columns : this.buildColumn(this.spreadId[i]),
						columnLines : true,
						autoScroll : true,
				        split: true,
				        clickRecord : this.clickRecord,
				        panelId : this.panelId,
						listeners: {
			                selectionchange: function(selModel, selected) {
			                	if (selected.length){
			                		var panel = Ext.getCmp(this.panelId);
			                		console.log(panel);
			                		this.clickRecord.apply(this.client, [selModel, selected]);
			                	}
			            	}
			            }
	                }]
				});
			}
		}
		else{
			items.push({   
				title: this.getTitle(1,this.spreadId),
	            bodyPadding: 3,
	            layout : 'fit',
	            items : [{
	            	xtype : 'grid',
	            	exportTo : this.getTitle(1,this.spreadId),
					store : this.store,
					selModel: Ext.create('Ext.selection.CheckboxModel'),
					columns : this.buildColumn(this.spreadId),
					columnLines : true,
					autoScroll : true,
			        split: true,
			        clickRecord : this.clickRecord,
			        panelId : this.panelId,
					listeners: {
		                selectionchange: function(selModel, selected) {
		                	if (selected.length){
		                		var panel = Ext.getCmp(this.panelId);
		                		panel.onClickGrid(selModel, selected);
		                	}
		            	}
		            }
	            }]
			});
		}
		return items;
	},
	//Display_Type = { "0", "1", "2", "3", "4", "5", "6", "7", "8" }
	//{ "CodeView", "CheckBox", "ComboBox", "Date", "DateTime", "Edit", "Int", "Number", "Time" }
	buildColumn : function(spreadId){
		//var map = this.formInfoData.get(0).data;
		var mapdefS2Nt = this.formInfoData.get(0).data.mapdefS2Nt;
		var mapColums = [];
		var alignList = ['left', 'right','center'];
		
		mapColums.push(Ext.create('Ext.grid.RowNumberer'));
		// hidden flag 추가
		for(var i in mapdefS2Nt){
			//if (mapdefS2Nt[i].spread_level == this.spreadLevel){
			if (mapdefS2Nt[i].spread_id == spreadId && mapdefS2Nt[i].col_code){
					
				if (mapdefS2Nt[i].display_type == 4 || mapdefS2Nt[i].display_type == 3){
					mapColums.push({
						dataIndex : mapdefS2Nt[i].col_code.toLowerCase(),
						text : mapdefS2Nt[i].col_alias1,
						width : mapdefS2Nt[i].col_width,
						align : alignList[mapdefS2Nt[i].align_type],
						xtype: 'datecolumn',   
						format:'Y-m-d H:i' 
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
	getTitle : function(lang_flag,spreadId){
		//var mapdefS2Nt =  this.formInfoData.get(0).data.mapdefS2Nt;
		var mapdefS2Nt = new Ext.util.MixedCollection();
		mapdefS2Nt.addAll(this.formInfoData.get(0).data.mapdefS2Nt);
		//if (lang_flag == 2) return 	mapdefS2Nt[0].tab_text2;
		//if (lang_flag == 3) return 	mapdefS2Nt[0].tab_text3;
		//else return 	mapdefS2Nt[0].tab_text1;
		var spdFilter = new Ext.util.Filter({
			property : 'spread_id',
			value : spreadId
		});
		mapdefS2Nt = mapdefS2Nt.filter(spdFilter);
		
		return mapdefS2Nt.items[0].tab_text1;
	}
	
});