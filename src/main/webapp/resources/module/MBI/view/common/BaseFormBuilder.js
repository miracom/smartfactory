/**
 * @class MBI.view.common.BaseFormBuilder
 * @author kyunghyang.
 * BaseForm의 기준 설정 정보를 읽어와 BaseForm 패턴별 view를 호출한다. 
 */
Ext.define('MBI.view.common.BaseFormBuilder', {
	/**
	 *  @cfg {Boolean} singleton
	 */
	singleton : true,
	
	/**
	 * Function list 선택시 function 기본정보를 가져온다.
	 * @param {Object} funcData function 설정정보
	 * @return from BaseForm of pattern
	 */
	buildForm : function(funcData) {
		// BaseForm 패턴이름
		function getViewName() {
			var view_patn = funcData.get('func_patn'); // FUNC_PATN :
			// 1G,2G,3G,1GA....
			return 'MBI.view.form.BaseForm' + view_patn; //ASSEMBLY_NAME
		}
		// Function title
		function getViewTitle() {
			var title = funcData.get('func_name1');
			
			var lang_flag = 1;		//lang_flag 1,2,3  => to do  
			
			if (lang_flag == 2) title = funcData.get('func_name2');
			else if (lang_flag == 3 ) title = funcData.get('func_name3');
			else title = funcData.get('func_name1');
			return title;
		}
		
		// BaseFome View Store
		var store = Ext.create('MBI.store.FormDesign', {
			proxy : {
				type : 'ajax',
				url : 'module/MBI/data/get_design.json',
				extraParams : {
					func_id : funcData.get('func_id'),
					spd_id : '',
					func_template_id : 1,
				},
				reader : {
					type : 'json'
				}
			}
		});

		// BaseForm 패턴 form
		var form = Ext.create(getViewName(), {
			title : getViewTitle(),
			// layout : 'fit',
			store : store,
			funcId : funcData.get('func_id'),
			langFlag : 1,
			closable : true
		// / getLangFlag!!!!!!!!!!!!!!
		});

		// Form의 Data가 갱신될때마다 화면정보 다시표시
		store.on('datachanged', function() { this.setup(); }, form);
		store.load();
		
		return form;
	}
});