Ext.define('ARC.controller.ARCController', {
	extend : 'Ext.app.Controller',

	stores : ['ARC.store.MenuStore'],
	models : [],
	views : [],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});	
	},

	onViewportRendered : function() {
		SmartFactory.addNav('ARC.view.TaskMenu', {
    		iconCls : 'iconsetDockReport'
		});
	}

});