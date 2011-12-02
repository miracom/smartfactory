Ext.define('CMN.view.viewport.East', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.viewport.east',
	id : 'east',
	cls : 'dockNavigation searchPanel',
	title :'Search',
	
	layout : 'card',
	
	listeners: {
		expand: function() {
			this.doLayout();
//		},
//		show: function() {
//			console.log('show');
//		},
//		activate: function() {
//			console.log('activate');
//		}, 
//		bodyresize: function() {
//			console.log('bodyresize');
//		},
//		render:function() {
//			console.log('render');
//		},
//		statesave: function() {
//			console.log('statesave');
//		},
//		staterestore: function() {
//			console.log('staterestore');
//		},
//		afterlayout: function() {
//			console.log('afterlayout');
//		},
//		enable: function() {
//			console.log('enable');
		}
	}
});
