/**
 * @class CMN.mixin.Search
 * 
 */
Ext.define('CMN.mixin.Search', {
	constructor: function(config) {
		var registry = {};
		var searchStore = null;
		
		return {
			search : {
				store : function() {
					if(searchStore == null)
						searchStore = Ext.getStore('cmn.appsearch_store');
					return searchStore;
				},
				remove : function(kind) {
					var store = this.store();
					store.each(function(record) {
					if (record.get('kind') === kind)
						this.remove(record);
					}, store);
				},
				register : function(config) {
					this.store().add(config);
				}
			} 
		};
	}
});
