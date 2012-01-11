Ext.define('WIP.controller.WIPController', {
	extend : 'Ext.app.Controller',

	stores : [ 'WIP.store.OperationStore', 'WIP.store.MaterialStore' ],
	models : [ 'WIP.model.Operation' ],
	views : [ 'WIP.view.common.MaterialSelector' ],

	init : function() {
		this.control({
			'viewport' : {
				afterrender : this.onViewportRendered
			}
		});
	},

	onViewportRendered : function() {
		SmartFactory.addNav('WIP.view.common.NavOperation', {
			iconCls : 'iconsetDockOperation',
			itemId : 'navOperation',
			title : 'Operations'
		});

		SmartFactory.codeview.register('Operation', {
			title : 'Select Operation',
			selects : [ 'FACTORY', 'OPER', 'OPER_DESC' ],
			sorters : [ {
				property : 'OPER',
				direction : 'ASC'
			} ],
			table : 'MWIPOPRDEF',
			columns : [ {
				header : 'Operation',
				dataIndex : 'OPER',
				flex : 1
			}, {
				header : 'Description',
				dataIndex : 'OPER_DESC',
				flex : 2
			} ],
			valueField : 'OPER',  //submit value
			displayField : ['OPER', 'OPER_DESC'] //display value
		});

		SmartFactory.codeview.register('Material', {
			title : 'Select Material',
			selects : [ 'FACTORY', 'MAT_ID', 'MAT_VER', 'MAT_DESC' ],
			sorters : [ {
				property : 'MAT_ID',
				direction : 'ASC'
			} ],
			table : 'MWIPMATDEF',
			columns : [ {
				header : 'Material',
				dataIndex : 'MAT_ID',
				flex : 2
			}, {
				header : 'Version',
				dataIndex : 'MAT_VER',
				flex : 1
			}, {
				header : 'Description',
				dataIndex : 'MAT_DESC',
				flex : 3
			} ],
			valueField : ['MAT_ID', 'MAT_VER']
		});
		
		SmartFactory.codeview.register('MaterialType', {
			viewType : 'gcm', 
			title : 'Select Material Type',//override
			selects : [ 'FACTORY', 'GROUP_NAME', 'MODEL_DESC_S' ],//override
			table : 'MATERIAL_GRP_2', //override
			columns : [ {//override
				header : 'Material Type',
				dataIndex : 'GROUP_NAME',
				flex : 2
			}, {
				header : 'Description',
				dataIndex : 'MODEL_DESC_S',
				flex : 3
			} ],
		});
	}
});