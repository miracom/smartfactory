Ext.define('SEC.view.User', {
	extend : 'Ext.panel.Panel',

	title : 'User Profile',

//	store : 'SEC.store.UserStore',
	
	listeners : {
		afterlayout: function() {
			var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: 'module/CMN/file_upload',
                debug: true
            });    
		}
	},

	items : [ {
		xtype : 'dataview',
		store : 'SEC.store.UserStore',
		data : [],
		html : '<div id="file-uploader-demo1"></div>'
	} ]
});