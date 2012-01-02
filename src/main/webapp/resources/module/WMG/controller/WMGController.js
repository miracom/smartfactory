Ext.define('WMG.controller.WMGController', {
	extend : 'Ext.app.Controller',

	stores : ['WMG.store.CommunicatorStore', 'WMG.store.NotificationStore'],
	models : ['WMG.model.Communicator', 'WMG.model.Notification'],
	views : ['WMG.view.Notification'],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
		
		var self = this;

		SmartFactory.mixin('WMG.plugin.Communicator', {
			messageNoticed : function(message) {
				var noticeStore = Ext.getStore('WMG.store.NotificationStore');
				noticeStore.add(message.data);
				Ext.getCmp('wmg.tray_notice').setText(noticeStore.count());

				SmartFactory.msg(message.data.title, message.data.message);
			},
			memberJoinedIn : function(message) {
				self.joinIn(message.data.username);
				SmartFactory.msg('Joined in.', message.data.username);
			},
			memberJoinedOut : function(message) {
				self.joinOut(message.data.username);
				SmartFactory.msg('Joined out.', message.data.username);
			}
		});
		
		SmartFactory.communicator.join();
	},

	onViewportRendered : function() {
		SmartFactory.status.tray({
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
		});
		
		SmartFactory.addNav('WMG.view.NavCommunicator', {
    		iconCls : 'iconsetDockCommunicator',
			itemId : 'navCommunicator',
			title : 'Communicator'
		});
		
		SmartFactory.search.register({
			kind : 'msg',
			key : 'notification',
			name : 'Notification',
			handler : function(searchRecord) {
	        	SmartFactory.addContentView({
	        		xtype : 'wmg.notification',
	        		title : 'Notification',
	        		itemId : 'wmg.notification'
	        	});
			}
		});
	},
	
	joinIn : function(user) {
		var store = Ext.getStore('WMG.store.CommunicatorStore');
		
		var idx = store.findExact('id', user);
		if(idx !== -1) {
			store.getAt(idx).set('status', 'on');
		} else {
			store.add({
				id: user,
				name: user,
				status : 'on'
			});
		}
	},

	joinOut : function(user) {
		var store = Ext.getStore('WMG.store.CommunicatorStore');
		
		var idx = store.findExact('id', user);
		if(idx !== -1) {
			store.getAt(idx).set('status', 'off');
		} else {
			store.add({
				id: user,
				name: user,
				status : 'off'
			});
		}
	}

});