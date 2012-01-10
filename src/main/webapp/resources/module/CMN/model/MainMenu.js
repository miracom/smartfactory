Ext.define('CMN.model.MainMenu', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'text',
		type : 'string'
	}, {
		name : 'leaf',
		type : 'boolean'
	}, {
		name : 'func_name',
		type : 'string'
	}, {
		name : 'func_desc',
		type : 'string'
	}, {
		name : 'func_type_flag',
		type : 'string'
	}, {
		name : 'func_group',
		type : 'string'
	}, {
		name : 'assembly_file',
		type : 'string'
	}, {
		name : 'assembly_name',
		type : 'string'
	}, {
		name : 'short_cut',
		type : 'string'
	}, {
		name : 'icon_index',
		type : 'string'
	}, {
		name : 'disp_level',
		type : 'string'
	}, {
		name : 'separator',
		type : 'string'
	}, {
		name : 'add_tool_bar',
		type : 'string'
	} ]
});
