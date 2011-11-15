Ext.require([ 'Ext.ux.tab.TabScrollerMenu', 'Ext.ux.tab.TabCloseMenu' ]);

Ext.define('CMN.view.viewport.Center', {

	extend : 'Ext.tab.Panel',

	id : 'content',

	alias : 'widget.viewport.center',

	enableTabScroll : true,

	plugins : [ {
		ptype : 'tabscrollermenu',
		maxText : 10,
		pageSize : 5
	}, {
		ptype : 'tabclosemenu'
	} ]

});