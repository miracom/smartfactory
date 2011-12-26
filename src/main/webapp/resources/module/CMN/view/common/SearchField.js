Ext.define('CMN.view.common.SearchField', {
	extend : 'Ext.form.field.ComboBox',

	alias : 'widget.cmn.searchfield',
	
	queryMode : 'local',
	
	displayField: 'key',
	
	matchFieldWidth : false,

    typeAhead: true,
	
	listConfig : {
		loadingText : 'Searching...',
		emptyText : 'No matching functions found.',

		getInnerTpl : function() {
			return '<div>{key} - {name}</div>'; 
		}, 
		minWidth : 300,
		minHeight : 400
	},
	
	listeners : {
		'select' : function(combo, records, eOpts) {
			var record = records[0];
			record.get('handler').call(this, record);
			combo.setValue('');
		}
	}
});
