Ext.define('ARC.store.TableListStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,

	model : 'ARC.model.TableList',

	proxy : {
		type : 'ajax',
		api : { // read, sync에 따른 URL 변경
			read : 'module/ARC/data/tablelist.json'
			//create: 'module/ARC/data/tableupdate.json',
			//update: 'module/ARC/data/tableupdate.json',
			//destroy: 'module/ARC/data/tableupdate.json'
		},
		actionMethods : { // Post방식으로 변경..
			read : 'POST'
			//create : 'POST',
			//update : 'POST',
			//destroy : 'DELETE'
		},
		reader : {
			type : 'json',
		// root : 'taskBasic',
		// totalProperty : 'total'
		},
		writer: {
            type: 'json'
        }
	},

	setParams : function(params) {
		this.proxy.extraParams = params;
	},
	setExtraParam : function(name, value) { // 파라메터세팅시 사용
		this.proxy.extraParams = this.proxy.extraParams || {};
		this.proxy.extraParams[name] = value;
		this.proxy.applyEncoding(this.proxy.extraParams);
	}
});