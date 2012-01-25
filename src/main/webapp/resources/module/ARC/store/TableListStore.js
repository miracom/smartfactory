Ext.define('ARC.store.TableListStore', {
	extend : 'Ext.data.Store',

	autoLoad : false,
	filterOnLoad: true,
	
	model : 'ARC.model.TableList',

	proxy : {
		type : 'ajax',
		api : { // read, sync에 따른 URL 변경
			read : 'module/ARC/data/tablelist.json',
			create: 'module/ARC/data/tableupdate.json',
			update: 'module/ARC/data/tableupdate.json',
			destroy: 'module/ARC/data/tableupdate.json'
		},
		actionMethods : { // Post방식으로 변경..
			read : 'GET',
			create : 'POST',
			update : 'POST',
			destroy : 'POST'
		},
		reader : {
			type : 'json'
		    //root : 'data'
			//totalProperty : 'total'
			//successProperty: 'success',
           // messageProperty: 'msg'
		},
		writer: {
            type: 'json'
        }
	},

	setParams : function(params) { // GET형식 param 추가시 사용
		this.proxy.extraParams = params;
	},
	setExtraParam : function(name, value) { // POST형식 param 추가시 사용
		this.proxy.extraParams = this.proxy.extraParams || {};
		this.proxy.extraParams[name] = value;
		this.proxy.applyEncoding(this.proxy.extraParams);
	}
});