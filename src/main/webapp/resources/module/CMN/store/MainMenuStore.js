Ext.define('CMN.store.MainMenuStore', {
	extend : 'Ext.data.TreeStore',

	storeId : 'cmn.mainmenu_store',

	autoLoad : false,

	model : 'CMN.model.MainMenu',

	root : {
		text : 'MainMenu',
		expanded : true
	},

	proxy : {
		type : 'ajax',
		url : 'module/CMN/data/mainmenus.json',
		reader : {
			type : 'json'
		}
	},

	listeners : {
		'load' : function(store, node, records, success) {
			if (!success)
				return;
			/*
			 * 이미 SearchStore에 등록되어있는 메뉴들을 다 제거한다.
			 */
			SmartFactory.search.remove('menu');

			/*
			 * 새로 로드된 메뉴들 SearchStore에 등록한다.
			 */
			node.cascadeBy(function(record) {
				if (!record.isLeaf())
					return;
				SmartFactory.search.register({
					kind : 'menu',
					key : record.get('func_name'),
					name : record.get('text'),
					handler : function(searchItem) {
						SmartFactory.addContentView({
							xtype : 'ras.resource.resource',
							title : searchItem.get('name'),
							tabConfig : {
								tooltip : searchItem.get('key')
							},
							data : null,
							closable : true
						});
					}
				});
			});
		}
	}
});
