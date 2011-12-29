Ext.define('MBI.view.form.builder.ChartBuilder',{
	//formInfoData : this.store.data,
	//langFlag : this.langFlag,
	//store : this.storeInfo,
	
	constructor : function(config) {
		Ext.apply(this, config);
	},
	//chtinfNt
	buildChart : function(cnt){
		var chtinfNt = this.formInfoData.get(0).data.chtinfNt;

		if (chtinfNt.length > 0){ 
			return Ext.create('Ext.container.Container',{
				bodyPadding: 3,
				//autoScroll : true,
				title : chtinfNt[0].chart_title,
				layout : {
					type : this.layoutType, //'hbox'
					align : 'stretch'
				},
				flex : this.flex,
				items : this.getChartItems(chtinfNt,cnt)
			});
		}
		else
			return '';
	},

	getChartItems : function(chtinfNt,cnt){
		var chart = [];
		for(var i = 0 ; i < cnt ; i++){
			chart.push(
					{
						xtype : 'chart',
						autoRender : 'true',
						store : this.store,
						flex : 1,
						shadow : true,
						//animate: true,
						animate : {
							easing : 'elasticln',
							duration : 1000
						},
						insetPadding : 25,
						legend:{
				 			position : 'right'
						},
						axes : this.buildAxes(chtinfNt),
						series : this.buildSeries(chtinfNt),
					}		
				);	
		};
		console.log(chart);
		return chart;
	},

	//TODO sample modify : title,type, position
	buildAxes : function(chtinfNt){
		//TODO type name mapping - line,bar,pie,column.....
		var chartType = chtinfNt[0].chart_type.toLowerCase();
		var mapAxes = [];
		// area,bar,column,line,scatter
		console.log(chartType);
		switch (chartType) {
			case 'area'    : { 
				mapAxes = [
	               this.getAxesNumeric(chtinfNt,'left'),
	               this.getAxesCategory(chtinfNt, 'bottom')
		            ];
				break;
			}
			case 'bar' :{
				mapAxes = [
	               this.getAxesNumeric(chtinfNt,'bottom'),
	               this.getAxesCategory(chtinfNt, 'left')
	               ];
				break;
			}
			case 'range bar' :{ //column
				mapAxes = [
	               this.getAxesNumeric(chtinfNt,'left'),
	               this.getAxesCategory(chtinfNt, 'bottom')
		            ];
				console.log('hhhhh');
				break;
			}
			case 'gauge' :{ //gauge
				mapAxes = [this.getAxesGauge()];
				break;
			}
			case 'line' :{
				mapAxes = [
					this.getAxesNumeric(chtinfNt,'left'),
					this.getAxesCategory(chtinfNt, 'bottom')     
					];
				break;
			}
			case 'pie' :{
				mapAxes = [];	break;
			}
			case 'radar area' :{
				mapAxes = [this.getAxesRadar('area')];	break;
			}
			case 'point' :{  //'Scatter'
				mapAxes = [
				   this.getAxesNumeric(chtinfNt, 'left'),
		           this.getAxesCategory(chtinfNt, 'bottom')
		           ];
				break;
			}
		};
		return mapAxes;
	},
	buildSeries : function(chtinfNt){
		var chartType = chtinfNt[0].chart_type.toLowerCase();
		var mapSeries = [];
		// area,bar,column,line,scatter
		switch (chartType) {
			case 'area'    : {
				mapSeries =  this.getSeriesArea(chtinfNt, 'left'); 
				break;
			}
			case 'bar' :{
				mapSeries =  this.getSeriesBar(chtinfNt, 'bottom');
				break;
			}
			case 'range bar' :{ //column
				mapSeries =  this.getSeriesColumn(chtinfNt, 'left'); 
				break;
			}
			case 'gauge' :{ //gauge
				mapSeries =  this.getSeriesGauge(chtinfNt); 
				break;
			}
			case 'line' :{
				mapSeries =  this.getSeriesLine(chtinfNt, 'left'); 
				break;
			}
			case 'pie' :{
				mapSeries =  this.getSeriesPie(chtinfNt); 
				break;
			}
			case 'radar area' :{
				mapSeries =  this.getSeriesRadar(chtinfNt,'area'); 
				break;
			}
			case 'point' :{  //'Scatter'
				mapSeries =  this.getSeriesScatter(chtinfNt, 'left'); 
				break;
			}
		};
		return mapSeries;
	},
	
	getColumn : function(index){
		if (index == null) return null;
		var mapdefS2Nt = this.formInfoData.get(0).data.mapdefS2Nt;

		var indexList =  index.split('.');
		for(i in mapdefS2Nt){
			if(indexList[0] == mapdefS2Nt[i].spread_id && indexList[1] == mapdefS2Nt[i].seq_no){
				return mapdefS2Nt[i].col_code.toLowerCase();
			}
		}
	},
	getFields : function(records,colName){
		var fieldData = [];
		
		for(var i in records){
			
			if (records[i][colName])
			{
				fieldData.push( this.getColumn(records[i][colName]));
			}
		};
		
		function fextractDupArr(arr) {
			 for(var i=0; i<arr.length; i++) {
			 
			 var checkDobl = 0;
			 
			   for(var j=0; j<arr.length; j++) {
			     if(arr[i] != arr[j]) {
			        continue;
			      } else {      
			        checkDobl++;
			        if(checkDobl>1){
			           spliced = arr.splice(j,1);
			        }
			      }
			   }
			 }
			 return arr;
			};
		return fextractDupArr(fieldData.sort());
	},
	
	getAxesNumeric : function(records,pos){
		return {	
			type : 'Numeric',
			minimum : 0,
			//maximum : 10,
			position : pos, // setting position horizontal/top to bot/ bot to top
			title : this.getColumn(records[0].value_col1),
			fields : this.getFields(records,'value_col1'),
			minorTickSteps : 2,
			majorTickSteps : 10,
			grid : {
				even : {
				//odd : {
					opactiy : 1,
					fill : '#ddd',
					stroke : '#bbb',
					'stroke-width' : 0.5
				}
			}
		};
	},
	
	getAxesCategory :  function(records,pos){
		return {
				type : 'Category',
				position:pos,
				title : this.getColumn(records[0].argument_col),
				fields : this.getFields(records,'argument_col'),
		};
	},
	
	getAxesGauge : function(){
		return {
				type : 'gauge',
				position : 'gauge',
				minimum : 0,
				maximum : 100,
				steps : 10,
				margin : 7
		};
	},
	
	getAxesTime : function(pos){
		return {
		    type: 'Time',
		    position: pos,
		    fields: 'date',
		    title: 'Day',
		    // 1~8
		    //label_date_format : Short Date / Long Date/Short Time / Long Time / General / Month and Day / Month and Year / Quarter and Year / Custom
		    //Custom ==> label_date_format_str
		    dateFormat: 'M d', // 형식 변환
		    constrain: true,
		    fromDate: new Date(),
		    toDate: new Date()
		};
	},
	
	getAxesRadar : function(){
		return {
				type : 'Radial',
				position : 'radial',
				label : {
					display : true
				}
		};
	},
	
	getSeriesArea : function(records,pos){
		return [{
	        type: 'area',
	        highlight: false,
	        axis: pos,
	        xField: this.getColumn(records[0].argument_col),
	        yField: this.getFields(records,'value_col1'),
	        style: {
	            opacity: 0.8
	        }
		}];
	},

	getSeriesBar : function(records,pos){
		return [{
			type: 'bar',
	        axis: 'bottom',  //top,bottom
	        highlight: true,
	        xField: this.getColumn(records[0].argument_col),
	        yField: this.getFields(records,'value_col1'),
	        label: {
	              display: 'insideEnd',
	              'text-anchor': 'middle',
	                field: this.getFields(records,'value_col1'),
	                renderer: Ext.util.Format.numberRenderer('0'),
	                orientation: 'horizontal',
	                color: '#333'
	        },
//            tips: {
//                trackMouse: true,
//                width: 140,
//                height: 28,
//                renderer: function(storeItem, item) { // TODO error check!
//                  this.setTitle('dddd');
//                }
//            },
		}];
	},

	getSeriesColumn : function(records,pos){
		return [{
			type: 'column',
	        axis: 'left', //left,right
	        highlight: true,
	        xField: this.getColumn(records[0].argument_col),
	        yField: this.getFields(records,'value_col1'),
	        label: {
	              display: 'insideEnd',
	              'text-anchor': 'middle',
	                field: this.getFields(records,'value_col1'),
	                renderer: Ext.util.Format.numberRenderer('0'),
	                orientation: 'vertical',
	                color: '#333'
	            }
		}];
	},
	getSeriesGauge : function(records){
		return [{
			type : 'gauge',
			field : this.getColumn(records[0].value_col1),
			donut : 30,//false,
			colorSet: ['#F49D10', '#ddd']
		}];
	},
	getSeriesLine : function(records,pos){
		var rtnSeries = [];
		for(var i in records){
			rtnSeries.push({
	            type: 'line',
	            highlight: {
	                size: 7,
	                radius: 7
	            },
	            axis: pos,
	            xField: this.getColumn(records[i].argument_col),
		        yField: this.getColumn(records[i].value_col1),
	        });
	    }
		return rtnSeries;
	},
	
	getSeriesPie : function(records,pos){
		var valueColumn = this.getColumn(records[0].value_col1);
		var argColumn = this.getColumn(records[0].argument_col);
		return [{
			type: 'pie',
	        field: valueColumn,
	        showInLegend: true,
	        highlight: {
	            segment: {
	                margin: 20
	            }
	        },
	        tips :{
	        	trackMouse: true,
	            width: 140,
	            height: 28,
	            //TODO check !!! =>Error : Invalid value for <rect> attribute height="NaN", y, ..... : home 1
//	            renderer: function(storeItem, item) {
//	                var total = 0;
//	                storeItem.store.each(function(rec) {
//	                    total += rec.get(valueColumn);
//	                });
//	                this.setTitle(storeItem.get(argColumn) + ': ' + Math.round(storeItem.get(valueColumn) / total * 100) + '%');
//	            }
	        },
	        label: {
	            field: argColumn,
	            display: 'rotate',
	            contrast: true,
	            font: '18px Arial'
	        }
		}];
	},

	getSeriesRadar : function(records,type){
		var rtnSeries = [];
		var fillFlag = 'none';
		switch(type){
		case 'line' : { fillFlag = 'none';	break;}
		case 'area' : { fillFlag = 'true';  break;}
		case 'point' : {fillFlag = 'false'; break;}
		}
		for(var i in records)
		{
			rtnSeries.push({
				type: 'radar',
		        xField: this.getColumn(records[i].argument_col),
		        yField: this.getColumn(records[i].value_col1),
		        showInLegend: true,
		        showMarkers: true,
		        markerConfig: {
		            radius: 4,
		            size: 4
		        },
		        style: {
		           'stroke-width': 2,
		           //opacity: 0,
		           fill: fillFlag
		        }	
			});
	    }
		
		return rtnSeries;
	},
	
	getSeriesScatter : function(records,pos){
		var rtnSeries = [];
		for(var i in records)
		{
			rtnSeries.push({
		        type: 'scatter',
		        markerConfig: {
		            radius: 5,
		            size: 5
		        },
		        axis: pos,
		        xField: this.getColumn(records[i].argument_col),
		        yField: this.getColumn(records[i].value_col1)
		    });
	    }
		return rtnSeries;
	}
});
