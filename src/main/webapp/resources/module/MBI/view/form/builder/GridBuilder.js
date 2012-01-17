/**
 * @class MBI.view.form.builder.GridBuilder
 * 설정 벙보로 grid설정.
 * 
 * @author kyunghyang.
 * 
 * @cfg {Object} formInfoData Chart의 구성요소 설정 정보
 * @cfg {Object} store 조회된 grid data
 * @cfg {Number} langFlag 표시되는 언어 (1:영어/2:한국어/3:기타언어)
 * @cfg {String} layoutType layout의 type 속성
 * @cfg {Number} flex 화면 구성 비율
 * @cfg {Number} spreadId grid를 구분하기위한 ID
 */
Ext.define('MBI.view.form.builder.GridBuilder',{
	/**
	 * 생성자. 호출자에서 선언한 정볼르 컨태이너에 적용함.
	 * @param config 호출자가 선언한 구성정보 값.
	 */
	constructor : function(config) {
		Ext.apply(this, config);
	},
	
	/**
	 * grid를 표시하기위한 tabpanel 정의
	 */
	buildGrid : function(){
		var storeDetail = this.store;
		//this.storeDetailInfo
		return Ext.create('Ext.tab.Panel',{
			flex : 1,
            plain: true,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
		
            items:this.buildTab(storeDetail) 
		});
	},
	
	/**
	 * tab 에 구서성될 grid 설정. (tab별 one grid 설정)
	 * @param storeDetail
	 * @returns {Array}
	 */
	buildTab : function(storeDetail){
		var items = [];
		if(this.spreadId instanceof Array) {
			for(var i in this.spreadId){
				items.push({   
					title: this.getTitle(1,this.spreadId[i]),
	                //bodyPadding: 3,
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
	            //bodyPadding: 3,
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
	
	/**
	 * grid의 column 속성 설정.
	 * @param {Number} spreadId
	 * @return {Object} mapColums
	 */
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
	
	/**
	 * lang_flag에 따라 해당 title정보를 가져온다.
	 * @param lang_flag
	 * @param spreadId
	 * @returns
	 */
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