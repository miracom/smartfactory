/**
 * @class Ext.ux.Exporter.ExcelFormatter.Worksheet
 * @extends Object
 * Represents an Excel worksheet
 * @cfg {Ext.data.Store} store The store to use (required)
 */
Ext.define("Ext.ux.exporter.excelFormatter.Worksheet", {

  /**
   * Constructor the Worksheet XML
   * @param {Object} exporter has store, columns, title
   */
  constructor: function(exporter, config) {
    config = config || {};

    this.store = exporter.store;
    this.columns = exporter.columns;
    this.title = exporter.title;
    this.headerInfo = exporter.headerInfo;
    Ext.applyIf(config, {
      hasTitle   : true,
      hasHeadings: true,
      stripeRows : true,
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
	var header = this.buildHeader(this.headerInfo);
	Ext.apply(this,{
		lastCols : header.lastCols
	});
	console.log(header);
	return this.worksheetTpl.apply({
	      header  : header.header.join(""),
	      columns : this.buildColumns().join(""),
	      rows    : this.buildRows().join(""),
	      colCount: header.colCnt,
	      rowCount: this.store.getCount()+header.stepCnt+1,
	      title   : this.title
	    }); 
  },


  buildHeader : function(headerInfo){
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
						}
					}
				}	
			}
			else{
				if(list[x].child == 0)
					list[x].mdown = mdown;
				cells.push(Ext.String.format('<ss:Cell ss:StyleID="headercell" ss:Index="{1}" ss:MergeAcross="{2}" ss:MergeDown="{3}"><ss:Data ss:Type="String">{0}</ss:Data><ss:NamedCell ss:Name="Print_Titles" /></ss:Cell>'
						,list[x].title, list[x].index, list[x].macross, list[x].mdown));
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