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
		'load' : function(store, node, records, success, eOpts) {
			if (!success)
				return;
			/* 
			 * 이미 SearchStore에 등록되어있는 메뉴들을 다 제거한다.
			 */
			var searchStore = Ext.getStore('cmn.appsearch_store');
			searchStore.each(function(record) {
				if (record.get('kind') === 'menu')
					this.remove(record);
			}, searchStore);

			/* 
			 * 새로 로드된 메뉴들 SearchStore에 등록한다.
			 */
			node.cascadeBy(function(record) {
				if (!record.isLeaf())
					return;
				
				searchStore.add({
					kind : 'menu',
					key : record.get('func_name'),
					name : record.get('text'),
					desc : record.get('func_desc'),
					handler : function(searchRecord) {
						console.log(searchRecord);
						SmartFactory.addContentView({
							xtype : 'ras.resource.resource',
							title : searchRecord.get('name'),
							tabConfig : {
								tooltip : searchRecord.get('key')
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
