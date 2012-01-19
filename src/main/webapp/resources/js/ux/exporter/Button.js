/**
 * @class Ext.ux.Exporter.Button
 * @extends Ext.Component
 * @author Nige White, with modifications from Ed Spencer, with modifications from iwiznia.
 *  * **xtype : exporterbutton **
 * Specialised Button class that allows downloading of data via data: urls.
 * Internally, this is just a link.
 * Pass it either an Ext.Component subclass with a 'store' property, or just a store or nothing and it will try to grab the first parent of this button that is a grid or tree panel:
 * new Ext.ux.Exporter.Button({component: someGrid});
 * new Ext.ux.Exporter.Button({store: someStore});
 * 
 * 	@example	
 *	Ext.require([ 'Ext.ux.exporter.Exporter' ]);
 *
 *	Ext.define('exportTest,{
 *	  	extend : 'Ext.form.Panel' ,
 *	  	exportable : true ,
 *	  
 *		initComponent : function() {
 *			this.items = [ this.zgrid ];
 *			this.bbar = [ this.zexporter ];
 *			this.callParent();
 *		},
 *	  	zgrid : {
 *	    	xtype : 'gridpanel',
 *	    	exportTo : 'sheet-test' ,
 *	    	columns : [{
 *	    	xtype : 'gridcolumn',
 *	        dataIndex : 'area',
 *	    	align : 'center',
 *	    	text : 'Location'
 *	    	}, {
 *	    	xtype : 'gridcolumn',
 *	    	dataIndex : 'lot_id',
 *	    	align : 'center',
 *	    	text : 'Lot No'
 *	    }, 
 *	  	zexporter :{
 *	    	xtype : 'exporterbutton',
 *	    	formatter : 'excel', 
 *	    	targetExports : ['sheet-test']
 *	  	},
 *	}); 
 *
 * @cfg {String} xtype 'exporterbutton'을 지정한다.
 * @cfg {String} formatter excel/csv 출력 파일 형식을 지정한다.
 * default : 'excel'
 * @cfg {String[]} targetExports 출력할 grid 속성의 exportTo에 선언한 sheet명을 설정한다.
 * 선언하지 않으면 부모 컨포넌트에 속해있는 컨포넌트의 exportTo가 정의된 grid는 모두 찾아 출력한다. 
 * @cfg {Ext.Component} component The component the store is bound to
 * @cfg {Ext.data.Store/string} store The store to export (alternatively, pass a component with a getStore method)
 */
Ext.define("Ext.ux.exporter.Button", {
    extend: "Ext.Component",
    alias: "widget.exporterbutton",
    html: '<p></p>',
    config: {
        swfPath: 'js/ux/exporter/downloadify.swf',
        downloadImage: 'js/ux/exporter/download.png',
        width: 24,
        height: 20,
        downloadName: "download"
    },

    constructor: function(config) {
      config = config || {};

      this.initConfig();
      Ext.ux.exporter.Button.superclass.constructor.call(this, config);

      var self = this;
     
      this.on("afterrender", function() { // We wait for the combo to be rendered, so we can look up to grab the component containing it
    	  var exportor = self.up('[exportable]');
    	  var components = [];
   		  self.findExportables(exportor);
    	  if(!self.exportables || self.store){
            if(typeof this.store == 'string'){
            	self.store = Ext.getStore(this.store);
            }
    		  self.setComponent(self.store || self.component || self.up("gridpanel") || self.up("treepanel"), config);
    	  }   
    	  else{
    		  if(!self.targetExports){
    			  for(var i in self.exportables){
    				  components.push(self.exportables[i]);
    			  }
    		  }
    		  else{
    			  for(var i in self.targetExports){
    				  components.push(self.exportables[self.targetExports[i]]);
    			  }
    		  }
    		  self.setComponent(components, config);
    	  }
      });
      
    },
    findExportable : function(exportor,sheet) {
		if(exportor['exportTo'] === sheet)
			return exportor;
		return exportor.down('[exportTo=' + sheet + ']');
	},
	
	findExportables : function(exportor) {
		this.exportables = {};
		if(!exportor){
			console.log('error');
			return null;
		}
		exportor.cascade(function(comp) {
			var sheet = comp['exportTo'];
			if(sheet) {
				this.exportables[sheet] = comp;
			};
		}, this);
		return this.exportables;
	},
    setComponent: function(components, config) {
    	if(components instanceof Array)
    		this.components = components;
    	else
    		this.components = [components];

        this.setDownloadify(config);
    },
    setDownloadify: function(config) {
        var self = this;     
        Downloadify.create(this.el.down('p').id,{
            filename: function() {
              return self.getDownloadName() + "." + Ext.ux.exporter.Exporter.getFormatterByName(self.formatter).extension;
            },
            data: function() {
              return Ext.ux.exporter.Exporter.exportAny(self.components, self.formatter, config);
            },
            transparent: false,
            swf: this.getSwfPath(),
            downloadImage: this.getDownloadImage(),
            width: this.getWidth(),
            height: this.getHeight(),
            transparent: true,
            append: false
        });
    }
});