Ext.define('CMN.view.viewport.East', {
	extend : 'Ext.panel.Panel',

	alias : 'widget.viewport.east',
	id : 'east',
	cls : 'nav supplement',
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
	},
	
	/* 'east' 영역은 'base'라는 아이템의 View를 items에 가져야 한다.
	 * 보조 패널을 갖지 않는 컨텐트 뷰가 Activate될 때, 이 'base'뷰가 activate된다.
	 */
	
	items : [{
		xtype : 'panel',
		itemId : 'base',
		html : '이 화면은 디폴트 화면입니다.'
	}]
});
