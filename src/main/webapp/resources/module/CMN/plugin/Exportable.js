Ext.define('CMN.plugin.Exportable', {
	extend : 'Ext.Base',
	
	init : function(client) {
		client.findExportables = this.findExportables;
		client.findExportable = this.findExportable;
	},

	findExportable : function(sheet) {
		if(this['exportTo'] === sheet)
			return this;
		return this.down('[exportTo=' + sheet + ']');
	},
	
	findExportables : function() {
		this.exportables = {};
		this.cascade(function(comp) {
			var sheet = comp['exportTo'];
			if(sheet) {
				this.exportables[sheet] = comp;
			};
		}, this);
		return this.exportables;
	}
});
