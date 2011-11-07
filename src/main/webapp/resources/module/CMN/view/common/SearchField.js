Ext.define('CMN.view.common.SearchField', {
	extend : 'Ext.form.field.ComboBox',

	alias : 'widget.cmn.searchfield',
	
//	store : Ext.create('CMN.store.SearchStore'),
//
//	displayField : 'Type menu ..',
//	
//	hideLabel : true,
//	
//	hideTrigger : false,
//
//	typeAhead : false,
	
	trigger1Cls : Ext.baseCSSPrefix + 'form-clear-trigger',

	trigger2Cls : Ext.baseCSSPrefix + 'form-search-trigger',

	hasSearch : false,
	
	paramName : 'query',

	initComponent : function() {
		this.callParent(arguments);
		this.on('specialkey', function(f, e) {
			if (e.getKey() == e.ENTER) {
				this.onTrigger2Click();
			}
		}, this);
	},

	afterRender : function() {
		this.callParent();
		this.triggerEl.item(0).setDisplayed('none');
	},

	onTrigger1Click : function() {
		var me = this, store = me.store, proxy = store
				.getProxy(), val;

		if (me.hasSearch) {
			me.setValue('');
			proxy.extraParams[me.paramName] = '';
			proxy.extraParams.start = 0;
			store.load();
			me.hasSearch = false;
			me.triggerEl.item(0).setDisplayed('none');
			me.doComponentLayout();
		}
	},

	onTrigger2Click : function() {
		var me = this, store = me.store, proxy = store
				.getProxy(), value = me.getValue();

		if (value.length < 1) {
			me.onTrigger1Click();
			return;
		}

		proxy.extraParams[me.paramName] = value;
		proxy.extraParams.start = 0;
		store.load();
		me.hasSearch = true;
		me.triggerEl.item(0).setDisplayed('block');
		me.doComponentLayout();
	},
	
	listConfig : {
		loadingText : 'Searching...',
		emptyText : 'No matching posts found.',

		getInnerTpl : function() {
			return '<a class="search-item" href="">'
					+ '<h3><span>{fundc_name}<br />by {user_func_desc}</span></h3></a>';
		}
	}
});
