Ext.define('SEC.view.User', {
	extend : 'Ext.panel.Panel',

	title : 'User Profile',

//	store : 'SEC.store.UserStore',
	
	listeners : {
		afterlayout: function() {
			var uploader = new qq.FileUploader({
                element: document.getElementById('file-uploader-demo1'),
                action: 'module/CMN/file_upload',
                debug: true,
                template: '<div class="fileUpload">' + 
                	'<div class="uploadArea"><span>Drop files here to upload</span></div>' +
                	'<div class="btnUpload">Upload a file</div>' +
                	'<ul class="uploadFileList"></ul>' + 
                	'</div>',

                // template for one item in file list
                fileTemplate: '<li>' +
                	'<span class="fileName downloadable"></span>' +
                	'<span class="spinner"></span>' +
                	'<span class="fileSize"></span>' +
                	'<a class="uploadCancel" href="#">Cancel</a>' +
                	'<span class="uploadFailed">Failed</span>' +
                	'<span class="uploadDelete"></span>' +
                	'</li>',        
        
                classes: {
                // used to get elements from templates
                	button: 'btnUpload',
                	drop: 'uploadArea',
                	dropActive: 'uploadArea-active',
                	list: 'uploadFileList',
                        
                	file: 'fileName',
                	spinner: 'spinner',
                	size: 'fileSize',
                	cancel: 'uploadCancel',

                	// added to list item when upload completes
                	// used in css to hide progress spinner
                	fail: 'uploadFailed'
                }
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