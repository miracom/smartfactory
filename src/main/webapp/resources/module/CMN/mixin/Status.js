Ext.define('CMN.mixin.Status', {
	constructor : function(config) {
		return {
			status : {
				set : function(state) {
					Ext.getCmp('status').setStatus(state);
				},

				busy : function(o) {
					Ext.getCmp('status').showBusy(o);
				},

				clear : function() {
					Ext.getCmp('status').clearStatus({
						useDefaults : true
					});
				},

				tray : function(tray) {
					Ext.getCmp('status').add(tray);
				}
			}
		};
	}
});
