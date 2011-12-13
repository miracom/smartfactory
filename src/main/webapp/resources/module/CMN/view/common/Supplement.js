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

	// listeners: {
	// expand: function() {
	// console.log('expand');
	// },
	// show: function() {
	// console.log('show');
	// },
	// activate: function() {
	// console.log('activate');
	// },
	// bodyresize: function() {
	// console.log('bodyresize');
	// },
	// render:function() {
	// console.log('render');
	// },
	// statesave: function() {
	// console.log('statesave');
	// },
	// staterestore: function() {
	// console.log('staterestore');
	// },
	// afterlayout: function() {
	// console.log('afterlayout');
	// }
	// },

	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Factory name'
	}, {
		xtype : 'datefield',
		fieldLabel : 'Period',
		name : 'startdt',
		emptyText : 'From date'
	}, {
		xtype : 'datefield',
		hideLabel : true,
		name : 'enddt',
		emptyText : 'To date'
	},
	// Ext.create('CMN.view.form.MaskedEditDateTime', {
	// fieldLabel: 'Start Date(Masked)',
	// name: 'startdtm',
	// labelAlign: 'top'
	// }),
	{
		xtype : 'fieldset',
		title : 'Lot Type',
		layout : 'anchor',
		defaults : {
			anchor : '100%'
		},
		items : [ {
			xtype : 'radiogroup',
			layout : 'anchor',
			items : [ {
				inputValue : 'Lot type A',
				boxLabel : 'Lot type A',
				checked : true
			}, {
				inputValue : 'Lot type B',
				boxLabel : 'Lot type B'
			} ]
		} ]
	}, {
		xtype : 'codeview',
		selectorName : 'Material',
		filter : [ {
			property : 'factory',
			value : SmartFactory.login.factory()
		} ],
		fieldLabel : 'Product ID'
	}, {
		xtype : 'codeview',
		selectorName : 'Operation',
		filter : [ {
			property : 'factory',
			value : SmartFactory.login.factory()
		}],
		fieldLabel : 'Operation ID'
	}, {
		xtype : 'fieldcontainer',
		fieldLabel : 'Time worked',
		layout : 'hbox',
		cls : 'hboxLine',
		items : [ {
			name : 'hours',
			xtype : 'numberfield',
			width : 55,
			allowBlank : false,
			emptyText : 'hour'
		}, {
			name : 'minutes',
			xtype : 'numberfield',
			width : 55,
			allowBlank : false,
			emptyText : 'min'
		}, {
			name : 'second',
			xtype : 'numberfield',
			width : 55,
			allowBlank : false,
			emptyText : 'sec'
		} ]
	}, {
		xtype : 'fieldset',
		title : 'Status',
		layout : 'anchor',
		defaultType : 'checkbox',
		defaults : {
			anchor : '100%'
		},
		cls : 'fieldsetCheckbox',
		items : [ {
			inputValue : 'Wait',
			boxLabel : 'Wait',
			checked : true
		}, {
			inputValue : 'Process',
			boxLabel : 'Process'
		} ]
	}, {
		xtype : 'filefield',
		name : 'file',
		fieldLabel : 'file upload & download',
		labelWidth : 50,
		msgTarget : 'side',
		allowBlank : false,
		anchor : '100%',
		buttonText : 'file...'
	}, {
		xtype : 'multifilefield',
		name : 'files',
		fieldLabel : 'Files upload',
		anchor : '100%'
	}, {
		xtype : 'xdatetime',
		id : 'dtf',
		fieldLabel : 'Date & Time'
		// ,width:360
		,
		anchor : '-18',
		timeFormat : 'H:i:s',
		timeConfig : {
			altFormats : 'H:i:s',
			allowBlank : true
		},
		dateFormat : 'd.n.Y',
		dateConfig : {
			altFormats : 'Y-m-d|Y-n-d',
			allowBlank : true
		}
	} ]
});
