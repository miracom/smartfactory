Ext.define('WIP.view.setup.OperationSetup', {
	extend : 'WIP.view.common.AbstractEntitySetup',

	supplement : 'WIP.view.common.OperationSelector',

	groupItemName : 'GRP_OPER',
	cmfItemName : 'CMF_OPER',
	
	groupFieldNamePrefix : 'OPER_GRP_',
	cmfFieldNamePrefix : 'OPER_CMF_',
	
	cmfMaxCnt : 20,

	initComponent : function() {
		this.store = Ext.create('WIP.store.OperationStore');
		this.callParent();
	
		var self = this;

		this.on('afterrender', function() {
			/*
			 * Supplement에 대한 이벤트리스너 등록은 클라이언트 뷰의 afterrender 이벤트 발생 이후에 해야한다.
			 */
			self.getSupplement().on('operationselected', function(record) {
				self.sub('update').setDisabled(true);
				self.sub('operation').setValue(record.get('oper_id'));
				self.sub('description').setValue(record.get('desc'));
				self.store.load();
			});
			
			self.store.on('load', function(store) {
				self.setFieldValue(store);
			});
			
			self.sub('groupsetup').on('buildOk', function(itemName) {
				self.setFieldValue(self.store);
			});
			self.sub('cmfsetup').on('buildOk', function(itemName) {
				self.setFieldValue(self.store);
			});
		});
		
		this.store.load();

		this.sub('close').on('click', function() {
			self.close();
		});
		this.sub('update').on('click', function() {
			self.dataUpdate();
		});
	},

	dataUpdate : function(){
		//TODO ... dataupdate
		var rtn = this.getValues();
		console.log(rtn);
	},
	buildBasicForm : function(main) {
		return {
			xtype : 'container',
			itemId : 'zbasic',
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			padding : 5,
			height : 64,
			items : [ {
				xtype : 'textfield',
				fieldLabel : 'Operation',
				labelStyle: 'font-weight:bold',
				itemId : 'operation',
				labelSeparator : '',
				name : 'oper',
				flex : 1
			}, {
				xtype : 'textfield',
				fieldLabel : 'Description',
				itemId : 'description',
				labelSeparator : '',
				name : 'desc',
				flex : 1
			} ]
		};
	},

	buildGeneralTab : function(main) {
		return {
			xtype : 'container',
			title : 'General',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			flex : 1,
			items : [ {
				xtype : 'container',
				layout : {
					type : 'vbox',
					align : 'stretch'
				},
				flex : 1
			}, {
				xtype : 'container',
				layout : {
					type : 'vbox',
					align : 'stretch'
				},
				flex : 1
			} ]
		};
	},

	buildPropertiesTab : function(main) {
		return {
			title : 'RTS'
		};	
	},
		
	setFieldValue : function(store){
		var record = store.getAt(0);
		//console.log(record);
		var self = this;
		if (record == null) return null;
		if (this.sub('cmfsetup').buildOk != true) return null;
		if (this.sub('groupsetup').buildOk != true) return null;
		
		for(var i =1; i<this.cmfMaxCnt;i++){
			var value="";
			var cmffield = this.sub(self.cmfFieldNamePrefix+i);
			if (cmffield.isHidden() != true) 
				value = record.get(self.cmfFieldNamePrefix+i);	
			cmffield.setValue(value);
			
			if (i<11){
				value = "";
				var grpfield = this.sub(self.groupFieldNamePrefix+i);
				if (grpfield.isHidden() != true) 
					value = record.get(self.groupFieldNamePrefix+i);
				grpfield.setValue(value);
			}
		}
		this.sub('update').setDisabled(false);
	}
});
