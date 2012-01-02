Ext.define('CMN.view.viewport.South', {
	extend : 'CMN.view.common.StatusBar',

	id : 'status',

	cls:'appStatusBar noBoardPanel',

	alias : 'widget.viewport.south',

	// defaults to use when the status is cleared:
	defaultText : 'Ready',
	// defaultIconCls: 'default-icon',

	// values to set initially:
	text : 'Ready',
	iconCls : 'x-status-valid',

	// any standard Toolbar items:
	items : [ {
		xtype : 'button',
		text : 'Show Warning & Clear',
		handler : function() {
			SmartFactory.status.set({
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
			SmartFactory.status.busy('나 무지 바빠.');
		}
	}, {
		xtype : 'button',
		text : 'Clear status',
		handler : function() {
			SmartFactory.status.clear();
		}
	} ],

	initComponent : function() {
		this.callParent();
	}
});
