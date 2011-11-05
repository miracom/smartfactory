Ext.define('CMN.controller.CMNController', {
	extend : 'Ext.app.Controller',

	stores : [ 'CMN.store.MenuStore', 'CMN.store.FavoriteStore' ],
	models : [ 'CMN.model.Menu', 'CMN.model.Favorite' ],
	views : [ 'CMN.view.viewport.Center', 'CMN.view.viewport.South',
			'CMN.view.viewport.East', 'CMN.view.viewport.North',
			'CMN.view.viewport.West', 'CMN.view.common.Menu',
			'CMN.view.common.Toolbar', 'CMN.view.common.NavMenu',
			'CMN.view.common.NavFavorite' ]
});