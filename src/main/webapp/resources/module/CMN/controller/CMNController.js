Ext.define('CMN.controller.CMNController', {
	extend : 'Ext.app.Controller',

	stores : [ 'CMN.store.MenuStore', 'CMN.store.FavoriteStore' ],
	models : [ 'CMN.model.Menu' ],
	/* store와 생성 우선순위 때문에 .. 해결전까지는 North와 West View를 등록하지 못함. 참고. Viewport.js */
	views : [ 'CMN.view.viewport.Center', 
			'CMN.view.viewport.South', 'CMN.view.viewport.East']
});