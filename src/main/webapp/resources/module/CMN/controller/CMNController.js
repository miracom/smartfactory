Ext.define('CMN.controller.CMNController', {
	extend : 'Ext.app.Controller',

	stores : [ 'CMN.store.MenuStore', 'CMN.store.FavoriteStore',
			'CMN.store.SearchStore' ],
	models : [ 'CMN.model.Menu', 'CMN.model.Favorite', 'CMN.model.Search' ],
	views : [ 'CMN.view.viewport.Center', 'CMN.view.viewport.South',
			'CMN.view.viewport.East', 'CMN.view.viewport.North',
			'CMN.view.viewport.West', 'CMN.view.common.Menu',
			'CMN.view.common.SystemMenu', 'CMN.view.common.Toolbar',
			'CMN.view.common.NavMenu', 'CMN.view.common.NavFavorite',
			'CMN.view.common.SearchField' ],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
		var search = Ext.create('CMN.view.common.SearchField', {
			store : Ext.create('CMN.store.SearchStore')
		});

		SmartFactory.addSystemMenu(search);
	}

});