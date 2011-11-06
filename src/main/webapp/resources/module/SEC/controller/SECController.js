Ext.define('SEC.controller.SECController', {
	extend : 'Ext.app.Controller',

	stores : [ 'SEC.store.UserStore' ],
	models : [ 'SEC.model.User' ],
	views : [ 'SEC.view.User' ],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
		var profile = {
			text : 'shnam',
			menu : [
					{
						text : 'Profile',
						handler : function() {
							SmartFactory.addContentView('SEC.view.User');
						}
					},
					{
						text : 'Logout',
						handler : function() {
							Ext.MessageBox.confirm('Confirm',
									'Are you sure you want to do that?',
									function(confirm) {
										if (confirm === 'yes')
											document.location.href = 'logout';
									});
						}
					} ]
		};

		SmartFactory.addSystemMenu(profile);
	}
});