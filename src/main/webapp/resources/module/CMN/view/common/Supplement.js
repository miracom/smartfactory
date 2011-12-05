Ext.require('CMN.view.form.MultiFileField');

Ext.define('CMN.view.common.Supplement', {
	extend : 'Ext.panel.Panel',

	cls : 'dockNavigation searchPanel',

	layout : {
		align : 'stretch',
		type : 'vbox'
	},

	bodyStyle : 'padding:5px',

	defaults : {
		labelAlign : 'top'
	},
	
//	listeners: {
//		expand: function() {
//			console.log('expand');
//		},
//		show: function() {
//			console.log('show');
//		},
//		activate: function() {
//			console.log('activate');
//		}, 
//		bodyresize: function() {
//			console.log('bodyresize');
//		},
//		render:function() {
//			console.log('render');
//		},
//		statesave: function() {
//			console.log('statesave');
//		},
//		staterestore: function() {
//			console.log('staterestore');
//		},
//		afterlayout: function() {
//			console.log('afterlayout');
//		}
//	},
	
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Factory name'
	},
	// Ext.create('CMN.view.form.MaskedEditDateTime', {
	// fieldLabel: 'Start Date(Masked)',
	// name: 'startdtm',
	// labelAlign: 'top'
	// }),
	{
		xtype : 'datefield',
		fieldLabel : 'Start Date',
		name : 'startdt'
	}, {
		xtype : 'datefield',
		fieldLabel : 'End Date',
		name : 'enddt'
	}, {
		xtype : 'combobox',
		fieldLabel : 'Product ID',
		listeners : {
			focus : function() {
				SmartFactory.showSelector();
			}
		},
		store : Ext.create('Ext.data.Store', {
			fields : [ 'name', 'value' ],
			data : [ {
				name : 'Mr',
				value : 'mr'
			} ]
		})
	}, {
		xtype : 'combobox',
		cls : 'resourceSelector',
		fieldLabel : 'Operation ID',
		listeners : {
			focus : function() {
				SmartFactory.showSelector();
			}
		},
		store : Ext.create('Ext.data.Store', {
			fields : [ 'name', 'value' ],
			data : [ {
				name : 'Mr',
				value : 'mr'
			} ]
		})
	}, {
		xtype : 'filefield',
		name : 'photo',
		fieldLabel : 'Photo',
		labelWidth : 50,
		msgTarget : 'side',
		allowBlank : false,
		anchor : '100%',
		buttonText : 'Photo...'
	}, {
		xtype: 'multifilefield',
		name : 'files',
		fieldLabel: 'Files upload',
		anchor : '100%'
	} ]
});