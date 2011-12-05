Ext.define('MBI.view.form.BaseLayoutView', {
	extend: 'Ext.panel.Panel',
	
	alias: 'widget.mbi.baselayoutview',
	
	layout : 'fit',
	
	funcData : {},
	
	listeners : {
		render : function(panel, opts) {
			this.store = Ext.create('MBI.store.FormDesign',{
				proxy: {
					type: 'ajax',
					url : 'module/MBI/data/get_design.json',
					extraParams : {
						fac_id : this.funcData.get('fac_id'),
						func_id : this.funcData.get('func_id'),
						spd_id : '',
						lang_flag : 1,
						admin_user : SmartFactory.login.name(),
						func_template_id : 1,
						grp_user_id : ''
					},
					reader: {
						type: 'json'
					}
				}
			});
			
			this.store.on('datachanged', this.refreshItems, this);
			this.store.on('clear', this.refreshItems, this);
			this.store.load();					
		}
	},

	refreshItems : function() {
		this.removeAll();
		
		 var map = this.store.data.get(0).data;
		// select FUNC_CODE,FUNC_PATN, ASSEMBLY_NAME from asecfundef where func_id=####

		//this.funcData.get('assembly_name');
		var view_patn = this.funcData.get('func_patn'); // FUNC_PATN : 1G,2G,3G,1GA....
		//var view_name = 'MBI.view.form.BaseForm' + view_patn; //ASSEMBLY_NAME
		var view_name = 'MBI.view.form.BaseForm1G' //TEST
		//console.log('call form 0 : '+view_name);
		
		var view = Ext.create(view_name,{
			//title : this.getViewTitle(),
			//layout : 'fit',
			store : this.store,
			facId : this.funcData.get('fac_id'),
			funcId : this.funcData.get('func_id'),
			langFlag : 1 /// getLangFlag!!!!!!!!!!!!!!
		});

		this.add(view);
	},
	
	getViewTitle : function(){
		var title = this.funcData.get('func_name1');
		
		var lang_flag = 1;		//lang_flag 1,2,3  => to do  
		
		if (lang_flag == 2) title = this.funcData.get('func_name2');
		else if (lang_flag == 3 ) title = this.funcData.get('func_name3');
		else title = this.funcData.get('func_name1');
		return title;
	}
});
