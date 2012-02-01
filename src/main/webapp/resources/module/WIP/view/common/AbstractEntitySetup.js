Ext.define('WIP.view.common.AbstractEntitySetup', {
	extend : 'Ext.panel.Panel',
	
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
	},

	buildBasicForm : Ext.emptyFn,
	
	buildGeneralTab : Ext.emptyFn,
	
	buildPropertiesTab : Ext.emptyFn,
	
	buildGroupSetupTab : function(main) {
		return {
			xtype : 'cmn_groupsetup',
			title : 'Group Setup',
			itemName : main.groupItemName,
			fieldNamePrefix : main.groupFieldNamePrefix,
			valueStore : main.store,
			updateSetCnt : main.updateSetCnt,
			updateUseCnt : main.updateUseCnt
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
			itemName : main.cmfItemName,
			fieldNamePrefix : main.cmfFieldNamePrefix,
			valueStore : main.store,
			updateSetCnt : main.updateSetCnt,
			updateUseCnt : main.updateUseCnt
		};
	},
	
	buildOtherTabs : Ext.emptyFn
});
