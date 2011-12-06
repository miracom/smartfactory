Ext.define('MBI.view.form.builder.BaseFormBuilder', {
	singleton : true,
	buildForm : function(funcData) {
		function getViewName() {
			var view_patn = funcData.get('func_patn'); // FUNC_PATN :
			// 1G,2G,3G,1GA....
			return 'MBI.view.form.BaseForm' + view_patn; //ASSEMBLY_NAME
		}
		
		function getViewTitle() {
			var title = funcData.get('func_name1');
			
			var lang_flag = 1;		//lang_flag 1,2,3  => to do  
			
			if (lang_flag == 2) title = funcData.get('func_name2');
			else if (lang_flag == 3 ) title = funcData.get('func_name3');
			else title = funcData.get('func_name1');
			return title;
		}

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

		var form = Ext.create(getViewName(), {
			title : getViewTitle(),
			// layout : 'fit',
			store : store,
			funcId : funcData.get('func_id'),
			langFlag : 1,
			closable : true
		// / getLangFlag!!!!!!!!!!!!!!
		});

		store.on('datachanged', function() { this.setup(); }, form);
		store.load();
		
		return form;
	}
});