Ext.define('MBI.view.form.BaseLayoutView', {
	extend: 'Ext.container.Container',
	
	layout : 'fit',
	
	listeners : {
		render : function(panel, opts) {
			this.store = Ext.create('MBI.store.FormDesign',{
				proxy: {
					type: 'ajax',
					url : 'module/MBI/data/get_design.json',
					extraParams : {
						fac_id : this.data.get('fac_id'),
						func_id : this.data.get('func_id'),
						spd_id : '',
						lang_flag : 1,
						admin_user : SmartFactory.user(),
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
		
		// var map = this.store.data.get(0).data;
		// select FUNC_CODE,FUNC_PATN, ASSEMBLY_NAME from asecfundef where func_id=####
		
		var view_patn = '1G'; // FUNC_PATN : 1G,2G,3G,1GA....
		var view_name = 'MBI.view.form.BaseForm' + view_patn;
		var view_title = 'Multi-Table Update'; // FUNC_NAME1 : CUS_DM_TEST1
		
		var view = Ext.create(view_name,{
			title : view_title,
			//layout : 'fit',
			store : this.store
		});
		this.add(view);
	}
});
