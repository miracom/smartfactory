/**
 * @class CMN.mixin.CodeView
 * 코드뷰 팝업의 설정정보를 관리한다.
 * CodeViewfield 정의시 호출되며, 코드뷰버튼을 클릭하면 설정된 정보로 팝업을 생성하여 화면에 표시한다.
 * 자주 사용하는 codeview는 각 모듈의 컨트롤러 onViewportRendered에 선언하여 사용한다.
 * 
 *   @example
 *   //SmartFactory.codeview.register(코드뷰명,{각 속성 정의})
 *   //SmartFactory.codeview.show(코드뷰명, filters, callback, client);
 *   //SmartFactory.codeview.get(코드뷰명)
 *   SmartFactory.codeview.register('MaterialType', {
 *		viewType : 'gcm', 
 *		title : 'Select Material Type',
 *		selects : [ 'FACTORY', 'GROUP_NAME', 'MODEL_DESC_S' ]
 *		table : 'MATERIAL_GRP_2', //GCM의 Table 컬럼에 정의되어있는 Table명
 *		columns : [ {
 *			header : 'Material Type',
 *			dataIndex : 'GROUP_NAME',
 *			flex : 2
 *		}, {
 *			header : 'Description',
 *			dataIndex : 'MODEL_DESC_S',
 *			flex : 3
 *		} ],
 *	 });
 *
 *
 * @cfg show 코드뷰 팝업을 표시한다.
 * @cfg register 코드뷰설정정보를 등록한다.
 * @cfg get 등록된 설정정보를 가져온다.
 * 
 * @author Kyunghyang
 */
Ext.define('CMN.mixin.CodeView', {
	constructor: function(config) {
		var registry = {};
		Ext.applyIf(registry,{
			'BaseCodeView' : {
				gcmdefuse : false,
				viewType : 'gcm', // essential 0:Table, 1:GCM
				title : 'Code Select', //default-override
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
