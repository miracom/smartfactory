Ext.define('WMG.model.Notification', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'message',
		type : 'string'
	}, {
		name : 'severity',
		type : 'string'
	}, {
		name : 'title',
		type : 'string'
	} ]
});
