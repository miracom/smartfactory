Ext.define('CMN.view.form.ValueRangeField', {
	extend : 'Ext.form.FieldContainer',
	alias: 'widget.valuerange',
	
	cls :'hboxLine',
	
	layout: {
        type: 'hbox',
        align:'top'
    },
	
    defaults:{margins:'0 3 0 0'},
	
    constructor : function(config) {
    	CMN.view.form.ValueRangeField.superclass.constructor.apply(this, arguments);
	},
	initComponent:function() {
		this.items = this.buildItems();
		CMN.view.form.ValueRangeField.superclass.initComponent.call(this);
	},
	buildItems : function(){
		var fieldId = 'valueField'; // + 1
		var items= [];
		
		return items;
	},
	buildValue : function(fieldId){
		return {
			xtype : 'textfield',
			hidden : true,
			name : this.name,
			itemId : fieldId,
			value : this.defaultValue
		};
	},
	
});