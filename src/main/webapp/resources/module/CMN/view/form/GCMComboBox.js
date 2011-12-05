Ext.define('CMN.view.form.GCMComboBox', {
	extend : 'Ext.form.field.ComboBox',

	constructor : function(config) {
		
		// tableName, valueField, displayField + fieldsInfo
		config = Ext.applyIf(config, {
			fieldLabel : '',
			store : this.buildStore(config),
			queryMode : 'local',
			displayField : '',
			valueField : ''
		});

		CMN.view.form.GCMComboBox.superclass.constructor.call(this, config);
	},

	buildStore : function(config) {
		// StoreBuilder를 재활용
		return null;
	}
});
