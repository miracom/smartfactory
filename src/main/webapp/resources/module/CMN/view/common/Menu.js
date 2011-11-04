Ext.define('CMN.view.common.Menu', {
	extend: 'Ext.toolbar.Toolbar',
	
	constructor: function(config) {
		CMN.view.common.Menu.superclass.constructor.apply(this, arguments);
		
		// this.on('beforerender', this.beforeRender, this);
		this.store.on('load', this.beforeRender, this);
	},
	
	beforeRender: function() {
		if(!this.loadedd) {
			try {
				this.reloadToolbarItems();
				this.loadedd = true;
			} catch(e) {
				console.log(e);
				// Error ..
			}
		}
	},
	
	reloadToolbarItems: function() {
		if(!this.store) {
			throw new Error("TreeStore is not configured.");
		}
		
		this.removeAll();
		
		//Get first level children from treestore
		var root = this.store.getRootNode();
		
		this.loadMenu(root).every(function(menu) {
			return this.add(menu);
		}, this);
	},
	
	loadMenu: function(node) {
		var children = node.childNodes;
		
		if(!children || children.length < 1) {
			return undefined;
		}

		self_function = arguments.callee;
		return children.map(function(child){
			var menu = self_function(child);
			var ret = {
				text: child.get('text')
			};
			if(child.get('separator') === 'Y') {
				ret.xtype = 'menuseparator';
			}
			
			if(menu) {
				ret.menu = {
					items: menu
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