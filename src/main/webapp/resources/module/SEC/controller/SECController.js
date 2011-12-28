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
			text : SmartFactory.login.name(),
			menu : [ {
				text : 'Profile',
				handler : function() {
					SmartFactory.addContentView('SEC.view.User');
				}
			}, {
				text : 'Logout',
				handler : function() {
					Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', function(confirm) {
						if (confirm === 'yes') {
							SmartFactory.communicator.leave();
							document.location.href = 'logout';
						}

					});
				}
			} ]
		};

		SmartFactory.addSideMenu('Ext.button.Button', profile);
	}
});