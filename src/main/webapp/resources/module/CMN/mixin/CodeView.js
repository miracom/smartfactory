Ext.define('CMN.mixin.CodeView', {
	constructor: function(config) {
		var registry = {};
		Ext.applyIf(registry,{
			'GcmCodeView' : {
				gcmdefuse : false,
				viewType : 'gcm', // essential 0:Table, 1:GCM
				title : 'Gcm List', //default-override
				selects : ['KEY_1','DATA_1'], //default override
				columns : [ {
					header : 'ITEM',
					dataIndex : 'KEY_1',
					flex : 2
				}, {
					header : 'DESC',
					dataIndex : 'DATA_1',
					flex : 3
				} ],
			}
		});
		return {
			codeview : {
				show : function(codeview, filters, callback, client) {
				//show : function(codeview, filters, client) {
					/*
					 * codeview, filters, callback, client are mandatory parameters
					 */				
					var codeviewOptions = SmartFactory.codeview.get(codeview); //get codeview

					if (filters != null)
						codeviewOptions.filters = filters; //where
					codeviewOptions.callback = callback; //지정한 callback 함수
					codeviewOptions.client = client;
					if (client.title!=undefined){
						codeviewOptions.title = client.title;
					};
					if (client.selects!=undefined){
						codeviewOptions.selects = client.selects;
					};
					if (client.columns!=undefined){
						codeviewOptions.columns = client.columns;
					};
					if (client.table!=undefined) {
						codeviewOptions.table = client.table;
					};
					//codeviewOptions 생성자로 view.CodeViewPopup 호출
					var codeview = Ext.create('CMN.view.common.CodeViewPopup', {
						codeviewOptions : codeviewOptions
					});
					codeview.show();
					return codeview;
				},
				register : function(name, codeview) {
					Ext.applyIf(codeview,{
						gcmdefuse : true,
						viewType : 'table', //default
						sorters : [],
						table : ''
					});
					registry[name] = codeview;
				},
				get : function(name) {
					return registry[name];
				}
			} 
		};
	}
});
