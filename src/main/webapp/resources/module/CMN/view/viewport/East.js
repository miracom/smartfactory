Ext.define('CMN.view.viewport.East', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.viewport.east',
	cls : 'dockNavigation searchPanel',
	title :'Search',
	
	
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	
	bodyStyle: 'padding:5px',
	
	items: [ {
		xtype:'textfield',
        fieldLabel: 'Factory name',
        labelAlign: 'top'
	},{
		xtype:'datefield',
		fieldLabel: 'Start Date',
        name: 'startdt',
        labelAlign: 'top'
	},{
		xtype:'datefield',
		fieldLabel: 'End Date',
        name: 'enddt',
        labelAlign: 'top'
    },{
		xtype:'combobox',
		fieldLabel: 'Product ID',
        labelAlign: 'top',
        listeners : {
        	focus : function() {
        		SmartFactory.showSelector();
        	}
        },
        store:          Ext.create('Ext.data.Store', {
            fields : ['name', 'value'],
            data   : [
                {name : 'Mr',   value: 'mr'}
            ]
        })
    },{
		xtype:'combobox',
		cls:'resourceSelector',
		fieldLabel: 'Operation ID',
		listeners: {
			focus: function() {
				SmartFactory.showSelector();
			}
		},
        labelAlign: 'top',
        store:          Ext.create('Ext.data.Store', {
            fields : ['name', 'value'],
            data   : [
                {name : 'Mr',   value: 'mr'}
            ]
        })
    }],
    buttons: [{
        text: 'Search',
    }, {
        text: 'Reset',
    }]
});
