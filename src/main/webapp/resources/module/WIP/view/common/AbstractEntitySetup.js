Ext.define('WIP.view.common.AbstractEntitySetup', {
	extend : 'Ext.form.Panel',
	
	plugins : [ Ext.create('CMN.plugin.Supplement') ],

	/*
	 * Extendee would be better to define supplement
	 * 
	 * eg : supplement : 'WIP.view.common.OperationSelector'
	 */

	bodyStyle : 'padding:5px',

	buttons : {
		xtype : 'cmn_trx_buttons'
	},

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	initComponent : function() {
		this.callParent();
		
		var zbasic = this.add(this.buildBasicForm(this));
		var ztabpnl = this.add({
			xtype : 'tabpanel',
			flex : 1
		});
		
		var tabs = [
			this.buildGeneralTab(this),
			this.buildPropertiesTab(this),
			this.buildGroupSetupTab(this),
			this.buildAttributeSetupTab(this),
			this.buildCustomFieldSetupTab(this),
			this.buildOtherTabs(this)
		];

		for(var i = 0;i < tabs.length;i++) {
			if(tabs[i] instanceof Object)
				ztabpnl.add(tabs[i]);
		}
		
		var self = this;

		/*
		 * Supplement에 대한 이벤트리스너 등록은 클라이언트 뷰의 afterrender 이벤트 발생 이후에 해야한다.
		 * [아래 샘플코드]
			this.on('afterrender', function() {
				self.getSupplement().on('materialselected', function(record) {
					self.sub('material').setValue(record.get('MAT_ID'));
					self.sub('version').setValue(record.get('MAT_VER'));
					self.sub('description').setValue(record.get('MAT_DESC'));
				});
			});
		* 
		*/
		this.getForm().trackResetOnLoad = true;

		self.sub('update').setDisabled(true);
		self.sub('create').setDisabled(true);
		
		self.store.on('load', function(store) {
			self.setFieldValue(store);
		});
		
		self.sub('groupsetup').on('buildOk', function(itemName) {
			self.setFieldValue(self.store);
		});

		self.sub('cmfsetup').on('buildOk', function(itemName) {
			self.setFieldValue(self.store);
		});
		
		this.getForm().on('dirtychange', function(form, dirty) {
			self.sub('update').setDisabled(!dirty);
		});

		this.sub('close').on('click', function() {
			self.onClose();
		});

		this.sub('update').on('click', function() {
			self.onUpdate();
		});
		
		this.sub('create').on('click', function() {
			self.onCreate();
		});
		
		this.sub('delete').on('click', function() {
			self.onDelete();
		});
		
	},
	
	setFieldValue : function(store){
		var record = store.getAt(0);

		if (record == null) return;
		if (this.sub('cmfsetup').buildOk != true) return;
		if (this.sub('groupsetup').buildOk != true) return;
		
		this.loadRecord(record);
	},

	onClose : function() {
		this.close();
	},
	
	onCreate : Ext.emptyFn,
	
	onUpdate : Ext.emptyFn,
	
	onDelete : Ext.emptyFn,

	buildBasicForm : Ext.emptyFn,
	
	buildGeneralTab : Ext.emptyFn,
	
	buildPropertiesTab : Ext.emptyFn,
	
	buildGroupSetupTab : function(main) {
		return {
			xtype : 'cmn_groupsetup',
			title : 'Group Setup',
			itemId : 'groupsetup',
			itemName : main.groupItemName,
			fieldNamePrefix : main.groupFieldNamePrefix,
			cmfMaxCnt : 10
		};
	},
	
	buildAttributeSetupTab : function(main) {
		return {
			title : 'Attribute'
		};
	},
	
	buildCustomFieldSetupTab : function(main) {
		return {
			xtype : 'cmn_groupsetup',
			title : 'Customized Field',
			itemId : 'cmfsetup',
			itemName : main.cmfItemName,
			fieldNamePrefix : main.cmfFieldNamePrefix,
			cmfMaxCnt : main.cmfMaxCnt
		};
	},
	
	buildOtherTabs : Ext.emptyFn
});
