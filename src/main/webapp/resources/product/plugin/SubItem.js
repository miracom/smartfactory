Ext.define('plugin.SubItem', function() {
	Ext.Container.implement({
		subitems : {},
		sub : function(id) {
			if(!this.subitems[id])
				this.subitems[id] = this.down('[itemId=' + id + ']');
			return this.subitems[id];
		}
	});

	return {
	};
}());