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
    			iconCls : 'iconsetDockReport',
    			itemId : 'navArchiveTasks',
    			title : 'Archive Tasks'
		});
	}

});

Ext.apply(Ext.form.field.VTypes, {
	// vtype validation function
	task : function(val, field) {
		var err = 0;
		for ( var i = 0; i < val.length; i++) {
			var chk = val.substring(i, i + 1);
			// 영문자 a~z, A~Z, 숫자, 특수문자 -, _ 입력가능
			if (!chk.match(/^[a-zA-Z0-9_-]/)) {
				err = err + 1;
			}
		}
		if (err > 0) {
			// validation function returns false
			return false;
		}

		return true;
	},
	// vtype Text property: The error text to display when the
	taskText : 'Not a valid task.'
});