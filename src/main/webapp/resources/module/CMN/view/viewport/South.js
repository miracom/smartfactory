Ext.define('CMN.view.viewport.South', {
	extend : 'Ext.ux.statusbar.StatusBar',

	id : 'status',

	cls:'appStatusBar noBoardPanel',

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
	}, {
		/*
		 * TODO 이 아이템은 WMG 모듈로 옮겨야 함.
		 */
		xtype : 'button',
		id : 'wmg.tray_notice',
		cls : 'trayNotice',
		iconCls : 'trayNoticeIcon',
		handler : function() {
        	SmartFactory.communicator.notice('notice', 'notice message...');
        	
        	SmartFactory.addContentView({
        		xtype : 'wmg.notification',
        		title : 'Notification',
        		itemId : 'wmg.notification'
        	});
        }
	}],

	initComponent : function() {
		this.callParent();
	}
});
