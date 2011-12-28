Ext.define('CMN.mixin.CodeView', {
	constructor: function(config) {
		var registry = {};
		
		return {
			codeview : {
				show : function(codeview, filters, callback, client) {
				//show : function(codeview, filters, client) {
					/*
					 * codeview, filters, callback, client are mandatory parameters
					 */				
					var codeviewOptions = SmartFactory.codeview.get(codeview); //get codeview
					codeviewOptions.filters = filters; //where
					codeviewOptions.callback = callback; //지정한 callback 함수
					codeviewOptions.client = client;
					if (codeviewOptions.selects == ""){
						codeviewOptions.selects = client.selects;
					};
					if (codeviewOptions.columns == ""){
						codeviewOptions.columns = client.columns;
					};
					if (codeviewOptions.table == "") {
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
					registry[name] = codeview;
				},
				get : function(name) {
					return registry[name];
				}
			} 
		};
	}
});
