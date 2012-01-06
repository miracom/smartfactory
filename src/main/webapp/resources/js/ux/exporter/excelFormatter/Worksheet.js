/**
 * @class Ext.ux.Exporter.ExcelFormatter.Worksheet
 * @extends Object
 * Represents an Excel worksheet
 * @cfg {Ext.data.Store} store The store to use (required)
 */
Ext.define("Ext.ux.exporter.excelFormatter.Worksheet", {

  constructor: function(store, config) {
    config = config || {};

    this.store = store;

    Ext.applyIf(config, {
      hasTitle   : true,
      hasHeadings: true,
      stripeRows : true,

      title      : "Workbook",
      columns    : store.fields == undefined ? {} : store.fields.items
    });

    Ext.apply(this, config);

    Ext.ux.exporter.excelFormatter.Worksheet.superclass.constructor.apply(this, arguments);
  },

  /**
   * @property dateFormatString
   * @type String
   * String used to format dates (defaults to "Y-m-d"). All other data types are left unmolested
   */
  dateFormatString: "Y-m-d",

  worksheetTpl: new Ext.XTemplate(
    '<ss:Worksheet ss:Name="{title}">',
      '<ss:Names>',
        '<ss:NamedRange ss:Name="Print_Titles" ss:RefersTo="=\'{title}\'!R1:R2" />',
      '</ss:Names>',
      '<ss:Table x:FullRows="1" x:FullColumns="1" ss:ExpandedColumnCount="{colCount}" ss:ExpandedRowCount="{rowCount}">',
        '{columns}',
        '<ss:Row ss:Height="38">',
            '<ss:Cell ss:StyleID="title" ss:MergeAcross="{colCount - 1}">',
              '<ss:Data xmlns:html="http://www.w3.org/TR/REC-html40" ss:Type="String">',
                '<html:B><html:U><html:Font html:Size="15">{title}',
                '</html:Font></html:U></html:B></ss:Data><ss:NamedCell ss:Name="Print_Titles" />',
            '</ss:Cell>',
        '</ss:Row>',
        '{header}',
        '{rows}',
      '</ss:Table>',
      '<x:WorksheetOptions>',
        '<x:PageSetup>',
          '<x:Layout x:CenterHorizontal="1" x:Orientation="Landscape" />',
          '<x:Footer x:Data="Page &amp;P of &amp;N" x:Margin="0.5" />',
          '<x:PageMargins x:Top="0.5" x:Right="0.5" x:Left="0.5" x:Bottom="0.8" />',
        '</x:PageSetup>',
        '<x:FitToPage />',
        '<x:Print>',
          '<x:PrintErrors>Blank</x:PrintErrors>',
          '<x:FitWidth>1</x:FitWidth>',
          '<x:FitHeight>32767</x:FitHeight>',
          '<x:ValidPrinterInfo />',
          '<x:VerticalResolution>600</x:VerticalResolution>',
        '</x:Print>',
        '<x:Selected />',
        '<x:DoNotDisplayGridlines />',
        '<x:ProtectObjects>False</x:ProtectObjects>',
        '<x:ProtectScenarios>False</x:ProtectScenarios>',
      '</x:WorksheetOptions>',
    '</ss:Worksheet>'
  ),

  /**
   * Builds the Worksheet XML
   * @param {Ext.data.Store} store The store to build from
   */
  render: function(store) {
	var headerInfo = this.buildHeaderInfo();
	Ext.apply(this,{
		lastCols : headerInfo.lastCols
	});
	return this.worksheetTpl.apply({
	      header  : headerInfo.header.join(""),
	      columns : this.buildColumns().join(""),
	      rows    : this.buildRows().join(""),
	      colCount: headerInfo.colCnt,
	      rowCount: this.store.getCount()+headerInfo.stepCnt+1,
	      title   : this.title
	    }); 
  },


  buildHeaderInfo : function(){
	var headerInfo = this.buildHeaderIndex();
	var baselist = headerInfo.list;
	var rowlist = [];
	var mdown = 0;

	if (!baselist) return '';

	for(var i=baselist.length-1 ;i>=0;i--){
		var cells = [];
		var list = baselist[i];
		
		//console.log(i+'-----------------');
		for(var x in list){
			if(i>0){
				if(list[x].step == i && list[x].parent){
					var uplist = baselist[i-1];
					for(var sx in uplist){
						if (list[x].parent==uplist[sx].title){
							if(x>0 && list[x].parent != list[x-1].parent){
								uplist[sx].index = list[x].index;
							}
							uplist[sx].macross += list[x].macross;
							if(list[x].child == 0)
								list[x].mdown = mdown;
							cells.push(Ext.String.format('<ss:Cell ss:StyleID="headercell" ss:Index="{1}" ss:MergeAcross="{2}" ss:MergeDown="{3}"><ss:Data ss:Type="String">{0}</ss:Data><ss:NamedCell ss:Name="Print_Titles" /></ss:Cell>'
									,list[x].title, list[x].index, list[x].macross, list[x].mdown));
							//console.log(list[x].parent+':'+list[x].title);
						}
					}
				}	
			}
			else{
				if(list[x].child == 0)
					list[x].mdown = mdown;
				cells.push(Ext.String.format('<ss:Cell ss:StyleID="headercell" ss:Index="{1}" ss:MergeAcross="{2}" ss:MergeDown="{3}"><ss:Data ss:Type="String">{0}</ss:Data><ss:NamedCell ss:Name="Print_Titles" /></ss:Cell>'
						,list[x].title, list[x].index, list[x].macross, list[x].mdown));
				//console.log(list[x].parent+':'+list[x].title);
			}
		}
		
		mdown++;
		rowlist.push(Ext.String.format('<ss:Row ss:AutoFitHeight="0">{0}</ss:Row>', cells.join('')));
	}
	rowlist.reverse();

	return {
		header : rowlist, //add
		list : headerInfo.list,
		colCnt : headerInfo.colCnt, 
		stepCnt : headerInfo.stepCnt,  
		lastCols : headerInfo.list[headerInfo.stepCnt-1] //add
	};
  },
  
  buildHeaderIndex: function(){
	  var cols  = this.columns;
	  var list = [[]];
	  var list2 = [[]];
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
						else{
							list[step-1][cnt].index = index-list[step-1][cnt].child;
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

		  var info = {
				  title : title,
				  dataname : dataname,
				  width : subCol.width,
				  step : step,
				  index : index,
				  child : child,
				  parent : parent,
				  macross : macross,
				  mdown : 0
			  };
		  list[step].push(info);
		  list2[step].push(info);
		  index++;
		  
		  if(i==tot-1){
			  if(step > 0){
				  for(var cnt=readStart;cnt<list[step-1].length;cnt++){
					if(list[step-1][cnt].title != subCol.parent){
						list[step-1][cnt].index = index;
						list[step].push(list[step-1][cnt]);
						index++;
					}
					else{
						list[step-1][cnt].index = index-list[step-1][cnt].child;
					}
				  }
			  }
			  
			  if(sublist.length>0){
				  i = -1;
				  tot = sublist.length;
				  step++;
				  cols = sublist;
				  list.push([]);
				  list2.push([]);
				  sublist = [];
				  index = 1;
				  readStart=0;
			  }
		  }
	  }
	  console.log('-----');
	  //console.log(list);
	  //console.log(list2);
	  return {
		  list : list,
		  colCnt : totColCnt,
		  stepCnt : step+1 
	  };
  },
  
  buildHeaderxx: function() {
    var cells = [];
    Ext.each(this.columns, function(col) {
      var title='';

      //if(col.dataIndex) {
          if (col.text != undefined) {
            title = col.text;
          } else if(col.name) {
            //make columns taken from Record fields (e.g. with a col.name) human-readable
            title = col.name.replace(/_/g, " ");
            title = Ext.String.capitalize(title);
          }

          cells.push(Ext.String.format('<ss:Cell ss:StyleID="headercell"><ss:Data ss:Type="String">{0}</ss:Data><ss:NamedCell ss:Name="Print_Titles" /></ss:Cell>', title));
      //}
    }, this);

    return cells.join("");
  },

  buildColumns: function() {
    var cols = [];
    var collist = this.columns;
    if (this.lastCols)
    	collist = this.lastCols;
    
    for(var i in collist){
    	if (collist[i].width && collist[i].width > 0)
    		cols.push(this.buildColumn(collist[i].width));
    	else
    		cols.push(this.buildColumn());
    }
    return cols;
  },

  buildColumn: function(width) {
    return Ext.String.format('<ss:Column ss:AutoFitWidth="0" ss:Width="{0}" />', width || 164);
  },

  buildRows: function() {
    var rows = [];
    this.store.each(function(record, index) {
        rows.push(this.buildRow(record, index));
    }, this);
    //    this.store.data.items
//    var storeData = this.store.data.items;
//    console.log(this.lastCols);
//    console.log(this.store);
//    
//    for(var i in storeData){
//   		rows.push(this.buildRow(storeData[i],i));
//    }
    return rows;
  },
  
  buildRow: function(record, index) {
    var style ='', cells = [];
    var cols = this.columns;

    if (this.lastCols)
    	cols = this.lastCols;
    
    if (this.stripeRows === true) style = index % 2 == 0 ? 'even' : 'odd';

    for (var i in cols){
    	var col = cols[i];
    	//var name  = col.name || col.dataIndex;
    	var name = col.dataname;
    	
    	if(name) {
    	      //if given a renderer via a ColumnModel, use it and ensure data type is set to String
		  var value = '', type = '';
		  if (Ext.isFunction(col.renderer)) {
		    value = col.renderer(record.get(name), null, record);
		    type = "String";
		  } else {
		    value = record.get(name);
		    type  = this.typeMappings[col.type || record.fields.get(name).type.type];
		  }
		  cells.push(this.buildCell(value, type, style).render());
		  }
    }
  
    return Ext.String.format("<ss:Row>{0}</ss:Row>", cells.join(""));
  },

  buildCell: function(value, type, style) {
    if (type == "DateTime" && Ext.isFunction(value.format)) value = value.format(this.dateFormatString);

    return new Ext.ux.exporter.excelFormatter.Cell({
      value: value,
      type : type,
      style: style
    });
  },

  /**
   * @property typeMappings
   * @type Object
   * Mappings from Ext.data.Record types to Excel types
   */
  typeMappings: {
    'int'   : "Number",
    'string': "String",
    'float' : "Number",
    'date'  : "DateTime"
  }
});