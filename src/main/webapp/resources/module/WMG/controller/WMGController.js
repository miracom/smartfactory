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
	},

	onViewportRendered : function() {
		SmartFactory.addDockingNav('WMG.view.NavCommunicator', {
    		iconCls : 'iconsetDockCommunicator'
		});
		
		var self = this;
		SmartFactory.communicator(Ext.create('WMG.service.Communicator', {
			username : SmartFactory.user(),
			callback_notice : function(message) {
				console.log('HHHHHHHH');
				console.dir(message);
				SmartFactory.msg(message.data.title, message.data.message);
			},
			callback_join_in : function(message) {
				self.joinIn(message.data.username);
				SmartFactory.msg('Joined in.', message.data.username);
			},
			callback_join_out : function(message) {
				self.joinOut(message.data.username);
				SmartFactory.msg('Joined out.', message.data.username);
			}
		})).join();
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