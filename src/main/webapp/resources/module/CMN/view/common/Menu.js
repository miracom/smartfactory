Ext.define('CMN.view.common.Menu', {
	extend : 'Ext.toolbar.Toolbar',

	alias : 'widget.cmn.menu',

	id : 'menu',

	listeners : {
		render : function(comp, obj) {
			var store = Ext.StoreManager.lookup('CMN.store.MenuStore');
			/* 이미 로딩되어있을 수 있으므로, 먼저 로드를 한 번하고, 리스너를 연결한다. */
			this.reloadToolbarItems(store);
			store.on('load', this.reloadToolbarItems, this);
		}
	},

	reloadToolbarItems : function(store) {
		this.removeAll();

		(this.loadMenu(store.getRootNode()) || []).every(function(menu) {
			return this.add(menu);
		}, this);
	},

	loadMenu : function(node) {
		var children = node.childNodes;

		if (!children || children.length < 1) {
			return undefined;
		}

		self_function = arguments.callee;
		return children.map(function(child) {
			var menu = self_function(child);
			var ret = {
				text : child.get('text')
			};
			if (child.get('separator') === 'Y') {
				ret.xtype = 'menuseparator';
			}

			if (menu) {
				ret.menu = {
					items : menu
				};
			} else {
				ret.viewModel = 'RAS.view.resource.Resource';
				ret.handler = SmartFactory.doMenu;
				ret.tooltip = child.get('func_name');
			}
			return ret;
		});
	}
});