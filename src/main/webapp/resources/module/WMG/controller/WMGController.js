Ext.define('WMG.controller.WMGController', {
	extend : 'Ext.app.Controller',

	stores : ['WMG.store.CommunicatorStore'],
	models : ['WMG.model.Communicator'],
	views : [],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
		
		var self = this;

		SmartFactory.mixin('WMG.plugin.Communicator', {
			messageNoticed : function(message) {
				console.dir(message);
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
		SmartFactory.addDockingNav('WMG.view.NavCommunicator', {
    		iconCls : 'iconsetDockCommunicator'
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