/**
 * @class Ext.ux.Exporter
 * @author Ed Spencer (http://edspencer.net), with modifications from iwiznia.
 * Class providing a common way of downloading data in .xls or .csv format
 */
Ext.define("Ext.ux.exporter.Exporter", {
	
    uses: [
        "Ext.ux.exporter.Base64",
        "Ext.ux.exporter.Button",
        "Ext.ux.exporter.csvFormatter.CsvFormatter",
        "Ext.ux.exporter.excelFormatter.ExcelFormatter"
    ],

    statics: {
        /**
         * Exports a grid, using the .xls formatter by default
         * @param {Ext.grid.GridPanel} grid The grid to export from
         * @param {Object} config Optional config settings for the formatter
         */
        exportAny: function(components, formatter, config) {
        	var exporters =[];

        	for(var i in components){
            	var store = null; 
            	var columns = [];
            	var title = components[i].title!=undefined ? components[i].title : (components[i].exportTo != undefined ? components[i].exportTo :'Sheet'+i);
            	if(!components[i].is) {
            		console.log('Error : There is no store!');
            		return;
                } else if(components[i].is("gridpanel")) {
                	store = components[i].store;
                	columns = Ext.Array.filter(components[i].columns, function(col) {
                        return !col.hidden;
                    });
                } else if (components[i].is("treepanel")) {
                	store = components[i].store;
                	columns= store.fields ? store.fields.items : store.model.prototype.fields.items;
                } else {
                	columns= store.fields ? store.fields.items : store.model.prototype.fields.items;
                    store = components[i];
                }

            	exporters.push({
            		store : store,
            		columns : columns,
            		headerInfo : this.getHeaderInfo(columns), 
            		title : title
            	});
        	}
            formatter = this.getFormatterByName(formatter);
            return formatter.format(exporters,config);
        },

        getFormatterByName: function(formatter) {
            formatter = formatter ? formatter : "excel";
            formatter = !Ext.isString(formatter) ? formatter : Ext.create("Ext.ux.exporter." + formatter + "Formatter." + Ext.String.capitalize(formatter) + "Formatter");
            return formatter;
        },
        getHeaderInfo: function(columns){
      	  var cols  = columns;
      	  var list = [[]];
      	  var sublist = [];
      	  var tot = cols.length;
      	  var totColCnt = tot;
      	  var index = 1;
      	  var step = 0;
      	  var parent = 0;
      	  var readStart=0;

      	  for(var i=0; i<tot;i++){
      		  var subCol = cols[i];
      		  var title = '';
      		  var dataname = '';
      		  var child = 0;
      		  var macross = 0;
      		  if(subCol.text != undefined || subCol.header != undefined){
      			  dataname = subCol.dataIndex;
      			  if (subCol.text != undefined)
      				  title = subCol.text;
      			  if (subCol.header != undefined)
      				  title = subCol.header;
      			  if(!subCol.dataIndex){
      				  var subItems = subCol.items.items;
      				  for(var j in subItems){
      					  Ext.applyIf(subItems[j],{
      						  parent : title
      					  });
      				  }
      				  sublist = sublist.concat(subItems);
      				  stepcnt = step+1;
      				  child = subCol.items.items.length;
      				  macross = child-1;
      				  totColCnt = totColCnt+macross;
      			  }
      	  
      			  if(step > 0){//9
      				  for(var cnt=readStart;cnt<list[step-1].length;cnt++){
      					if(list[step-1][cnt].title != subCol.parent){
      						if(list[step-1][cnt].child == 0){
      							list[step-1][cnt].index = index;
      							list[step].push(list[step-1][cnt]);
      							index++;
      						}
      						readStart++;
      					}
      					else
      						break;
      				  }
      			  }
      		  }
      		  else{
      			//make columns taken from Record fields (e.g. with a col.name) human-readable
      	          title = subCol.name.replace(/_/g, " ");
      	          title = Ext.String.capitalize(title);
      			  dataname = subCol.name;
      		  }

      		  if(subCol.parent)
      			  parent = subCol.parent;
      		  else
      			  parent = '';

      		  list[step].push({
      				  title : title,
      				  dataname : dataname,
      				  width : subCol.width,
      				  step : step,
      				  index : index,
      				  child : child,
      				  parent : parent,
      				  macross : macross,
      				  mdown : 0
      			  });
      		  index++;
      		  
      		  if(i==tot-1){
      			  if(step > 0){
      				  for(var cnt=readStart;cnt<list[step-1].length;cnt++){
      					if(list[step-1][cnt].title != subCol.parent){
      						list[step-1][cnt].index = index;
      						list[step].push(list[step-1][cnt]);
      						index++;
      					}
      				  }
      			  }
      			  
      			  if(sublist.length>0){
      				  i = -1;
      				  tot = sublist.length;
      				  step++;
      				  cols = sublist;
      				  list.push([]);
      				  sublist = [];
      				  index = 1;
      				  readStart=0;
      			  }
      		  }
      	  }
      	  
      	  return {
      		  list : list,
      		  colCnt : totColCnt,
      		  stepCnt : step+1 
      	  };
        }
    }
});