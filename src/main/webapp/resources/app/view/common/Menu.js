Ext.define('SmartFactory.view.common.Menu', {
	extend: 'Ext.toolbar.Toolbar',
	
	constructor: function(config) {
		SmartFactory.view.common.Menu.superclass.constructor.apply(this, arguments);
		
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
		var children = root.childNodes;

		for(var idx in children) {
			var child = children[idx];
			var	menu = this.loadMenu(child);

			var x = {
				text: child.data.text
			};
			
			if(menu) {
				x.menu = {
					items: menu
				}
			}

			this.add(x);
		}
	},
	
	loadMenu: function(node) {
		var children = node.childNodes;
		
		if(!children || children.length < 1) {
			return undefined;
		}

		self_function = arguments.callee;
		var x = children.map(function(child){
			return {
				text: child.data.text,
				menu: {
					items: self_function(child)
				}
			}
		});
		
		return x;
	}
});