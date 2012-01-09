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
        exportAny: function(component, formatter, config) {
            var func = "export";
            if(!component.is) {
                func = func + "Store";
            } else if(component.is("gridpanel")) {
                func = func + "Grid";
            } else if (component.is("treepanel")) {
                func = func + "Tree";
            } else {
                func = func + "Store";
                component = component.getStore();
            }

            return this[func](component, this.getFormatterByName(formatter), config);
        },

        /**
         * Exports a grid, using the .xls formatter by default
         * @param {Ext.grid.GridPanel} grid The grid to export from
         * @param {Object} config Optional config settings for the formatter
         */
//        exportGrids: function(grids) {
//        	var stores = [];
//        	var configs = [];
//        	for(item in grids){
//        		var grid = grids[item].grid;
//        		var formatter = grids[item].formatter;
//        		var config = grids[item].config;
//        		
//        		config = config || {};
//                formatter = this.getFormatterByName(formatter);
//
//                var columns = Ext.Array.filter(grids[item].grid.columns, function(col) {
//                    return !col.hidden; // && (!col.xtype || col.xtype != "actioncolumn");
//                });
//                var title = grid.exportTo;
//                if(!grid.title &&	config.exportTo)
//              	  title = config.exportTo;
//
//                Ext.applyIf(config, {
//                  title  : title,
//                  columns: columns
//                });
//                stores.push(grid.store);
//                configs.push(config);
//        	}
//            return formatter.formats(stores,configs);
//          },
        exportGrid: function(grid, formatter, config) {
          config = config || {};
          formatter = this.getFormatterByName(formatter);

          var columns = Ext.Array.filter(grid.columns, function(col) {
              return !col.hidden; // && (!col.xtype || col.xtype != "actioncolumn");
          });
          var title = grid.exportTo;
          if(!grid.title &&	config.exportTo)
        	  title = config.exportTo;

          Ext.applyIf(config, {
            title  : title,
            columns: columns
          });
          
          return formatter.format(grid.store, config);
        },

        exportStore: function(store, formatter, config) {
           config = config || {};
           formatter = this.getFormatterByName(formatter);

           Ext.applyIf(config, {
             columns: store.fields ? store.fields.items : store.model.prototype.fields.items
           });

           return formatter.format(store, config);
        },

        exportTree: function(tree, formatter, config) {
          config    = config || {};
          formatter = this.getFormatterByName(formatter);

          var store = tree.store || config.store;

          Ext.applyIf(config, {
            title: tree.title
          });

          return formatter.format(store, config);
        },

        getFormatterByName: function(formatter) {
            formatter = formatter ? formatter : "excel";
            formatter = !Ext.isString(formatter) ? formatter : Ext.create("Ext.ux.exporter." + formatter + "Formatter." + Ext.String.capitalize(formatter) + "Formatter");
            return formatter;
        }
    }
});