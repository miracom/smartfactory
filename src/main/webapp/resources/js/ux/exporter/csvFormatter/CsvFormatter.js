/**
 * @class Ext.ux.Exporter.CSVFormatter
 * @extends Ext.ux.Exporter.Formatter
 * Specialised Format class for outputting .csv files
 */
Ext.define("Ext.ux.exporter.csvFormatter.CsvFormatter", {
    extend: "Ext.ux.exporter.Formatter",
    contentType: 'data:text/csv;base64,',
    //separator: ";",
    separator: ",",
    extension: "csv",

    format: function(exporters, config) {
    	var exporter = exporters[0];
    	this.store = exporter.store;
        this.header = exporter.headerInfo.list[exporter.headerInfo.stepCnt-1];
        return this.getHeaders() + "\n" + this.getRows();
    },
    getHeaders: function() {
        var columns = [];
        Ext.each(this.header, function(col) {
          columns.push(col.title);
        }, this);
        
        return columns.join(this.separator);
    },
    getRows: function() {
        var rows = [];
        this.store.each(function(record, index) {
          rows.push(this.geCell(record, index));
        }, this);
        return rows.join("\n");
    },
    geCell: function(record, index) {
        var cells = [];
        Ext.each(this.header, function(col) {
        	var name = col.dataname;
            if(name) {
            	var value = '';
                if (Ext.isFunction(col.renderer)) {
                   value = col.renderer(record.get(name), null, record);
                } else {
                   value = record.get(name);
                }
                cells.push(value);
            }
        });
        return cells.join(this.separator);
    }
});