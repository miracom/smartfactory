Ext.define('CMN.mixin.Status', {
	constructor : function(config) {
		return {
			status : {
				set : function(state) {
					Ext.getCmp('statusbar').setStatus(state);
				},

				busy : function(o) {
					Ext.getCmp('statusbar').showBusy(o);
				},

				clear : function() {
					Ext.getCmp('statusbar').clearStatus();
				}
			}
		};
	}
});
