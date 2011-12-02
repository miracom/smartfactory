Ext.define('CMN.view.common.Supplement', {
	extend: 'Ext.panel.Panel',
	
	cls : 'dockNavigation searchPanel',
	
	layout : {
		align : 'stretch',
		type : 'vbox'
	},
	
	bodyStyle: 'padding:5px',
	
	items: [ {
		xtype:'textfield',
        fieldLabel: 'Factory name',
        labelAlign: 'top'
	},
//	Ext.create('CMN.view.form.MaskedEditDateTime', {
//		fieldLabel: 'Start Date(Masked)',
//        name: 'startdtm',
//        labelAlign: 'top'
//	}),
	{
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
        handler : function() {
        	SmartFactory.communicator.notice('XXXX', 'YYYYYYY');
        }
    }, {
        text: 'Reset'
    }]
});