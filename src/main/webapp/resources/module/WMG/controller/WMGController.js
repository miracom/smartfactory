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
	}

});