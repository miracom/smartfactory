Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.field.ComboBox',

	cls : 'resourceSelector',
	
	constructor : function(config) {
		
		// tableName, valueField, displayField + fieldsInfo
		config = Ext.applyIf(config, {
			fieldLabel : '',
			store : this.buildStore(config),
			queryMode : 'local',
			valueField : ''
		});

		CMN.view.form.CodeViewField.superclass.constructor.call(this, config);
	},

	listeners : {
		focus : function() {
			SmartFactory.showSelector({
				
			});
		}
	},
	
	buildStore : function(config) {
		// StoreBuilder를 재활용
		return null;
	}
});
