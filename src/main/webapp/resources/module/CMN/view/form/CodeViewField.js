Ext.define('CMN.view.form.CodeViewField', {
	extend : 'Ext.form.field.Text',
	alias: 'widget.codeview',
	cls : 'resourceSelector',
	
	constructor : function(config) {
		
		// tableName, valueField, displayField + fieldsInfo
		config = Ext.applyIf(config, {
			//fieldLabel : '',
			//store : this.buildStore(config),
			queryMode : 'local',
			valueField : ''
		});

		CMN.view.form.CodeViewField.superclass.constructor.call(this, config);
	},	
	
	listeners : {
		specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
            	SmartFactory.selector.show(field.codeviewname, field.filter);
            }
            return false;
        },
        render: function(field){
        	field.getEl().on('click',function(e){
            	SmartFactory.selector.show(field.codeviewname, field.filter);
                return false;
            });
        }
	}
});
