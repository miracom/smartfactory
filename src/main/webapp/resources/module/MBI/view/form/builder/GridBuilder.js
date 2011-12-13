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
						columns : this.buildColumn(),
						columnLines : true
						
                    }]
                }]
			}]
		});
	},
	buildColumn : function(){
		//var map = this.formInfoData.get(0).data;
		var mapdefS2Nt = this.formInfoData.get(0).data.mapdefS2Nt;
		var mapColums = [];
		var alignList = ['left', 'right','center'];
		
		mapColums.push(Ext.create('Ext.grid.RowNumberer'));
		for(var i in mapdefS2Nt){
			mapColums.push({
				dataIndex : mapdefS2Nt[i].col_code.toLowerCase(),
				text : mapdefS2Nt[i].col_alias1,
				width : mapdefS2Nt[i].col_width,
				align : alignList[mapdefS2Nt[i].align_type],
				editor : {
					xtype : 'textfield',
	    			allowBlank: false
	    			}
			});
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