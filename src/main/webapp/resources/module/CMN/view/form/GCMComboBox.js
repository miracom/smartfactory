Ext.define('CMN.view.form.GCMComboBox', {
	extend : 'Ext.form.field.ComboBox',

	constructor : function(config) {
		
		// tableName, valueField, displayField + fieldsInfo
		config = Ext.applyIf(config, {
			store : this.buildStore(config),
		});
		CMN.view.form.GCMComboBox.superclass.constructor.call(this, config);
	},

	buildStore : function(config) {
		//TODO proxy configs 변경
		return Ext.create('Ext.data.Store',{
			autoLoad : true,
			fields : [config.displayField ,config.valueField],
			proxy : {
				type : 'ajax',
				url : 'module/MBI/data/tbldat_nt.json',
				extraParams : {
					tbl_code : config.tableName,
					params :''
				},
				reader : {
					type : 'json'
				}
			}
		});
	}
});