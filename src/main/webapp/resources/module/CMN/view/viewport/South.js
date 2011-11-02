Ext.define('CMN.view.viewport.South', {
	extend : 'Ext.ux.statusbar.StatusBar',

	id : 'statusbar',
	alias : 'widget.viewport.south',

	// defaults to use when the status is cleared:
	defaultText : 'Default status text',
	// defaultIconCls: 'default-icon',

	// values to set initially:
	text : 'Ready',
	iconCls : 'x-status-valid',

	// any standard Toolbar items:
	items : [ {
		xtype : 'progressbar',
		id : 'main-progressbar',
		width : 150
	}, {
		xtype : 'button',
		text : 'Show Warning & Clear',
		handler : function() {
			SmartFactory.setStatus({
				text : 'Oops!',
				iconCls : 'x-status-error',
				clear : true
			// auto-clear after a set interval
			});
		}
	}, {
		xtype : 'button',
		text : 'Show Busy',
		handler : function() {
			SmartFactory.showBusy('나 무지 바빠.');
		}
	}, {
		xtype : 'button',
		text : 'Clear status',
		handler : function() {
			SmartFactory.clearStatus();
		}
	}, '-', 'Plain Text' ],

	initComponent : function() {
		this.callParent();
	}
});
