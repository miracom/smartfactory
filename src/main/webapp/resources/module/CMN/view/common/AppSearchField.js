Ext.define('CMN.view.common.AppSearchField', {
	extend : 'Ext.form.field.ComboBox',

	alias : 'widget.cmn.appsearchfield',
	
	queryMode : 'local',
	
	displayField: 'key',
	
	matchFieldWidth : false,

    typeAhead: true,
    
    emptyText : 'Alt+Q',
    
    initComponent : function() {
    	this.callParent();
    	
    	new Ext.util.KeyMap(document, {
    	    key: 'q',
    	    alt : true,
    	    fn: this.focus,
    	    scope: this
    	});
    },
	
	listConfig : {
		loadingText : 'Searching...',
		emptyText : 'No matching functions found.',

		getInnerTpl : function() {
			return '<div class="appSearchItem"><span class="kind">{kind}</span> <span class="key">{key}</span>: {name}</div>'; 
		}, 
		minWidth : 200
	},
	
	listeners : {
		'select' : function(combo, records, eOpts) {
			var record = records[0];
			record.get('handler').call(this, record);
			combo.setValue('');
		}
	}
});
