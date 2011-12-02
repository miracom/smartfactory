Ext.define('CMN.plugin.Supplement', {
	init : function(client) {

		/*
		 * TODO get any simple model object to build supplement panel which will be showed on east side.
		 */   
        
//		client.showMessage = this.showMessage.createDelegate(this);
//        if (client.rendered) {
//            this.onRender(client);
//        } else {
//            client.on('render', this.onRender, this);
//        }
        
        /*
         * Sample
         */
        client.supplement = Ext.create('CMN.view.common.Supplement', {
//			title : client.title
		});

        client.on('activate', this.onActivate, client);
        client.on('destroy', this.onDestroy, client);
        client.on('render', this.onRender, client);
    },
    
    onRender : function() {
		if(this.supplement) {
			Ext.getCmp('east').add(this.supplement);
			this.supplement.doLayout();
		}
    },
	
    onActivate : function() {
		if(this.supplement)
			Ext.getCmp('east').getLayout().setActiveItem(this.supplement);
	},
	
	onDestroy : function() {
		if(this.supplement)
			Ext.getCmp('east').remove(this.supplement);
	}
});