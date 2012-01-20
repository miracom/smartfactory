/**
 * @class CMN.view.form.MultiFileField
 * @author Administrator
 * **xtype : multifilefield **
 * 파일을 추가 및 삭제를 할 수 있는 필드이다. 
 * 
 *   @example
 *	 Ext.define('ConditionTest',{
 *	 	extend : 'Ext.panel.Panel',
 *	 	title : 'Condition Test',
 *	 	initComponent : function() {
 *			this.callParent();
 *		},
 *	 	items : [ {
 *			xtype : 'multifilefield',
 *			name : 'files',
 *			fieldLabel : 'Files upload',
 *			anchor : '100%'
 *		} ],
 *	 	renderTo : Ext.getBody()
 *	 });
 */
Ext.define('CMN.view.form.MultiFileField', {
	extend: 'Ext.form.field.Base',
	
	alias: 'widget.multifilefield',
	
	listeners : {
		afterrender: function() {
			var element_div = $(this.getEl().dom).find('.upload')[0];
			console.log(element_div);
			var uploader = new qq.FileUploader({
                element: element_div, //document.getElementById('file-uploader-demo1'),
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

	html : '<div class="upload"></div>'
});