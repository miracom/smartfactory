Ext.define('CMN.view.common.SearchField', {
	extend : 'Ext.form.field.ComboBox',

	alias : 'widget.cmn.searchfield',
	
	displayField: 'func_name',

    typeAhead: true,
	
	listConfig : {
		loadingText : 'Searching...',
		emptyText : 'No matching functions found.',

		getInnerTpl : function() {
			return '<div>{func_name} - {user_func_desc}</div>'; 
		}
	}
});
