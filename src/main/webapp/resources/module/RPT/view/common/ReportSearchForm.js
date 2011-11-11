Ext.define('RPT.view.common.ReportSearchForm', {
	extend : 'Ext.form.Panel',

	alias : 'widget.rpt.report_search_form',

	layout : 'fit',

	items : [ {
		xtype : 'fieldset',
		layout : {
			align : 'stretch',
			type : 'hbox'
		},
		flex : 1,
		items : [ {
			xtype : 'container',
			layout : {
				align : 'stretch',
				pack : 'center',
				type : 'vbox'
			},
			flex : 1,
			items : [ {
				xtype : 'container',
				layout : 'anchor',
				anchor : '90%',
				items : [ {
					xtype : 'triggerfield',
					fieldLabel : 'Factory',
					emptyText : 'click the trigger',
				}, {
					xtype : 'triggerfield',
					fieldLabel : 'Product Group',
					emptyText : 'click the trigger',
				}, {
					xtype : 'triggerfield',
					fieldLabel : ' ',
					labelSeparator : '',
					emptyText : 'click the trigger',
				} ]
			} ]
		}, {
			xtype : 'container',
			layout : {
				align : 'stretch',
				pack : 'center',
				type : 'vbox'
			},
			flex : 1,
			items : [ {
				xtype : 'container',
				layout : 'anchor',
				anchor : '90%',
				items : [ {
					xtype : 'triggerfield',
					fieldLabel : 'Operation Code',
					emptyText : 'click the trigger',
				}, {
					xtype : 'triggerfield',
					fieldLabel : 'Product Type',
					emptyText : 'click the trigger',
				}, {
					xtype : 'triggerfield',
					fieldLabel : 'Product Code',
					emptyText : 'click the trigger',
				} ]
			} ]
		}, {
			xtype : 'container',
			layout : {
				align : 'middle',
				pack : 'end',
				type : 'hbox'
			},
			flex : 1,
			items : [ {
				xtype : 'button',
				margin : '5,0,0,0',
				width : 70,
				text : 'Search',
			}, {
				xtype : 'button',
				width : 70,
				text : 'Excel',
			}, ]
		} ]
	} ]
});