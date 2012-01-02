Ext.define('CMN.controller.CMNController', {
	extend : 'Ext.app.Controller',

	stores : [ 'CMN.store.MainMenuStore', 'CMN.store.FavoriteStore',
			'CMN.store.AppSearchStore' ],
	models : [ 'CMN.model.MainMenu', 'CMN.model.Favorite', 'CMN.model.AppSearch' ],
	views : [ 'CMN.view.viewport.Center', 'CMN.view.viewport.South',
			'CMN.view.viewport.East', 'CMN.view.viewport.North',
			'CMN.view.viewport.West', 'CMN.view.common.MainMenu',
			'CMN.view.common.SideMenu', 'CMN.view.common.AppTool',
			'CMN.view.common.NavMainMenu', 'CMN.view.common.NavFavorite',
			'CMN.view.common.AppSearchField', 'CMN.view.form.DateTime',
			'CMN.view.form.CodeViewField','CMN.view.form.DateTimeField',
			'CMN.view.form.TimePeriodField','CMN.view.form.DatePeriodField',
			'CMN.view.form.DateTimePeriodField','CMN.view.form.ValueRangeField'],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
		
		SmartFactory.mixin('CMN.mixin.CodeView');		
		SmartFactory.mixin('CMN.mixin.Status');
		SmartFactory.mixin('CMN.mixin.Search');
	},

	onViewportRendered : function() {
		SmartFactory.addSideMenu('CMN.view.common.AppSearchField', {
			store : Ext.create('CMN.store.AppSearchStore')
		});
		
		SmartFactory.addNav('CMN.view.common.NavMainMenu', {
    		iconCls : 'iconsetDockMenu',
			itemId : 'navMainMenu',
			title : 'mainmenu'
		});
		
		SmartFactory.addNav('CMN.view.common.NavFavorite', {
    		iconCls : 'iconsetDockFavor',
			itemId : 'navFavor',
			title : 'favorite'
		});
		
		SmartFactory.addContentView('CMN.view.map.Map');
	}

});