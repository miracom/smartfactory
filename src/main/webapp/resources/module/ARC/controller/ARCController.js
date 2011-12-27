Ext.define('ARC.controller.ARCController', {
	extend : 'Ext.app.Controller',

	stores : ['ARC.store.MenuStore'],
	models : ['ARC.model.Basic'],
	views : [],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});	
	},

	onViewportRendered : function() {
		SmartFactory.addDockingNav('ARC.view.TaskMenu', {
    		iconCls : 'iconsetDockReport'
		});
	}

});