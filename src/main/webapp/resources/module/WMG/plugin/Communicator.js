/*
 * Communicator ..
 */

Ext.define('WMG.plugin.Communicator', {
	constructor : function(config) {
		var options = {
			contextPath : '/smartfactory',
			cometdPath : '/cometd',
			noticeChannel : '/communicator/notice',
			joinInChannel : '/communicator/join/in',
			joinOutChannel : '/communicator/join/out',
			privateChannel : '/communicator/private',
			membersChannel : '/communicator/members',
			username : SmartFactory.user(),
			factory : SmartFactory.factory(),
			logLevel : 1,
			connectionClosed : function() {},
			connectionEstablished : function() {},
			messageNoticed : function() {},
			memberJoinedIn : function() {},
			memberJoinedOut : function() {},
			messageReceived : function() {},
			membersReceived : function() {}
		};

		var state = 'disconnected';
		var self = this;

		Ext.apply(options, config);

		$.cometd.websocketEnabled = false;

		/*
		 * subscribe When connection initialized for the first time, following
		 * subscriptions will be requested to the server.
		 * 
		 * unsubscribe When you logout (or just try to move other pages), all
		 * your subscriptions are unsubscribed.
		 * 
		 */

		var notice_subscription;
		var presence_join_in_subscription;
		var presence_join_out_subscription;
		var members_subscription;
		var private_message_subscription;

		function subscribe() {
			notice_subscription = $.cometd.subscribe(options.noticeChannel, options.messageNoticed);
			presence_join_in_subscription = $.cometd.subscribe(options.joinInChannel, options.memberJoinedIn);
			presence_join_out_subscription = $.cometd.subscribe(options.joinOutChannel, options.memberJoinedOut);
			members_subscription = $.cometd.subscribe(options.membersChannel, options.membersReceived);
			private_message_subscription = $.cometd.subscribe(options.privateChannel + '/' + options.username, options.messageReceived);
		}

		function unsubscribe() {
			if (notice_subscription) {
				$.cometd.unsubscribe(notice_subscription);
				notice_subscription = null;
			}
			if (presence_join_in_subscription) {
				$.cometd.unsubscribe(presence_join_in_subscription);
				presence_join_in_subscription = null;
			}
			if (presence_join_out_subscription) {
				$.cometd.unsubscribe(presence_join_out_subscription);
				presence_join_out_subscription = null;
			}
			if (members_subscription) {
				$.cometd.unsubscribe(members_subscription);
				members_subscription = null;
			}
			if (private_message_subscription) {
				$.cometd.unsubscribe(private_message_subscription);
				private_message_subscription = null;
			}
		}

		/*
		 * Callback functions for connection open/close.
		 */
		function connectionClosed() {
			if (options.logLevel <= 1)
				console.log('connection closed.');
			if (typeof (options.connectionClosed) === 'function')
				options.connectionClosed();
		}

		function connectionEstablished() {
			if (options.logLevel <= 1)
				console.log("connection established.");

			if (typeof (options.connectionEstablished) === 'function')
				options.connectionEstablished();
		}

		function connectionBroken() {
			if (options.logLevel <= 1)
				console.log("connection broken.");

			if (typeof (options.connectionBroken) === 'function')
				options.connectionBroken();
		}

		function connectionInitialized() {
			// first time connection for this client, so subscribe tell
			// everybody.
			try {
				$.cometd.batch(function() {
					subscribe();
					$.cometd.publish(options.joinInChannel, {
						username : options.username,
						userid : options.username
					});
				});
			} catch (e) {
				if (options.logLevel <= 4)
					console.log("connection initialization error : " + e);
				return;
			}

			if (options.logLevel <= 1)
				console.log("connection initialized.");

			if (typeof (options.connectionInitialized) === 'function')
				options.connectionInitialized();
		}

		/*
		 * Now, we gonna construct this communicator.
		 * 
		 */
		$.cometd.addListener('/meta/connect', function(message) {
			if (state === 'disconnecting') {
				state = 'disconnected';
				connectionClosed.apply(self, []);
			} else {
				var prestate = state;
				state = message.successful ? 'connected' : 'disconnected';

				if (prestate === 'disconnected' && state === 'connected') {
					connectionEstablished.apply(self, []);
				} else if (prestate === 'connected' && state === 'disconnected') {
					connectionBroken.apply(self, []);
				}
			}
		});

		$.cometd.addListener('/meta/handshake', function(message) {
			if (message.successful) {
				connectionInitialized.apply(self, []);
			}
		});

		$(window).unload(function() {
			leave();
			$.cometd.disconnect();
		});

		// TODO confirm log levels, please. please. please.
		var logLevels = [ undefined, 'debug', 'info', 'warning', 'error', 'fatal' ];

		function join() {
			var url = location.protocol + "//" + location.host + options.contextPath + options.cometdPath;

			$.cometd.configure({
				url : url,
				logLevel : logLevels[options.logLevel + 2]
				// TODO change logLevel to following line. 
				// logLevel : logLevels[options.logLevel]
			});
			$.cometd.handshake();
		}

		function leave() {
			$.cometd.batch(function() {
				$.cometd.publish(options.joinOutChannel, {
					username : options.username,
					userid : options.username
				});
				unsubscribe();
			});
			$.cometd.disconnect();

			state = 'disconnecting';
		}

		function send(receiver, text) {
			if (!text || !text.length)
				return;

			$.cometd.publish(options.privateChannel + '/' + receiver, {
				text : text
			});
		}

		function notice(title, message) {
			$.cometd.publish(options.noticeChannel, {
				title : title,
				message : message
			});
		}

		return {
			communicator : {
				join : join,
				leave : leave,
				send : send,
				notice : notice
			}
		};
	}
});