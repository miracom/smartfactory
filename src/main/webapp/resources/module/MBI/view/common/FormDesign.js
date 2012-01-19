Ext.define('MBI.view.common.FormDesign', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.mbi.formdesign',
	
	title: 'Form Design',
	
	autoScroll: true,

	layout : 'accordion',
	
	listeners : {
		render : function(panel, opts) {
			this.store = Ext.create('MBI.store.FormDesign',{
				proxy: {
					type: 'ajax',
					url : 'module/MBI/data/get_design.json',
					extraParams : {
						func_id : this.data.get('func_id'),
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
	
	capitalize : function(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	},
	mapDescStore : function(){
		return {
				'fsprelNt' : 'SP Button - 특정 SP 설정 정보',
		        'ftrfldNt' : 'Print Button - Excel template field 정보',
		        'fxtrelNt' : 'print Button - Excel template file 정보',
				'grpcolNt' : 'Mouse Button - Group columns 설정 정보',
				'grpmapNt' : 'Mouse Button - Group map position 정보',
				'assdefGenNt' : 'Assign Form - 그룹 할당 설정 정보',
				'chtinfNt' : 'Chart Form - Chart 정보',
				'consqlGenNt' : 'View Button - 조회 조건문 정보',
				'fscrelNt' : 'Event Button - H101 service 정보',
				'mapconGenNt' : 'Conditon 설정 정보',
				'mapdefS2Nt': 'Grid column 설정 정보',
				'tabvldNt' : 'Update Button - Grid Validation 정보',
				'usrcolNt' : 'Mouse Button - Personal column 설정 정보',
				'usrmapNt' : 'Mouse Button - Personal map position 정보'
			};
	},
	refreshItems : function() {
		this.removeAll();
		
		var map = this.store.data.get(0).data;
		var mapDesc = this.mapDescStore();
		
		for(var item in map) {
			try {
				var capitalized = this.capitalize(item);
				var store_name = 'MBI.store.' + capitalized;
				var view_name = 'MBI.view.setup.' + capitalized + 'View';
				//var title = capitalized;
				var view = Ext.create(view_name, {
					title : capitalized + ' ['+ mapDesc[item] +']',
					height : 100,
					store : Ext.create(store_name, {
						data : map[item]
					})
				});
				this.add(view);
			} catch(e) {
				console.log(e);
			}
		}
	}
});






