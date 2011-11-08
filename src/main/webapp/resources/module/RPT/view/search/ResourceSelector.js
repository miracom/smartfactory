Ext.define('RPT.view.search.ResourceSelector', {
	extend : 'Ext.form.field.Trigger',
	alias : 'widget.rpt.resource_selector',

	onTriggerClick : function() {
		Ext.Msg.alert('Status', 'You clicked trigger!');
	}
});
