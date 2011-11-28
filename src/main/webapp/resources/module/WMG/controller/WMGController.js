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
		
		SmartFactory.communicator(Ext.create('WMG.service.Communicator', {
			username : SmartFactory.user(),
			callback_notice : function(message) {
				console.log('HHHHHHHH');
				console.dir(message);
				SmartFactory.msg(message.data.title, message.data.message);
			}
		})).join();
	}

});