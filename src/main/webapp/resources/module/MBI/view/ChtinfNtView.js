Ext.define('MBI.view.ChtinfNtView', {
	extend: 'Ext.grid.Panel',
	
	//model: 'MBI.model.ChtinfNt',
	autoScroll : true,
	
	columns : [ {
		xtype : 'gridcolumn',
		dataIndex : 'argument_col',
		align : 'center',
		text : 'Argument Column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'bar_distance',
		align : 'center',
		text : 'Bar Distance'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'bar_distance_px',
		align : 'center',
		text : 'Bar Distance px'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'bar_width',
		align : 'center',
		text : 'Bar Width'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'chart_title',
		align : 'center',
		text : 'Chart Title'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'chart_title_align',
		align : 'center',
		text : 'Chart Title Align'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'chart_title_position',
		align : 'center',
		text : 'Chart Title Position'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'chart_type',
		align : 'center',
		text : 'Chart Type'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_date_format',
		align : 'center',
		text : 'Label Date Format'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_date_format_str',
		align : 'center',
		text : 'Label Date Format String'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_disp_col',
		align : 'center',
		text : 'Label Display Column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_num_format',
		align : 'center',
		text : 'Label Num Format'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_num_scale',
		align : 'center',
		text : 'Label Num Scale'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_orientation',
		align : 'center',
		text : 'Label Orientation'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_pattern',
		align : 'center',
		text : 'Label Pattern'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_pointview',
		align : 'center',
		text : 'Label Point View'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_position',
		align : 'center',
		text : 'Label Position'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'label_show_flag',
		align : 'center',
		text : 'Label Show Flag'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'series_col',
		align : 'center',
		text : 'Series Column'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'series_name',
		align : 'center',
		text : 'Series Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'stacked_group_col',
		align : 'center',
		text : 'Stacked Group Col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'stacked_group_name',
		align : 'center',
		text : 'Stacked Group Name'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'summary_func',
		align : 'center',
		text : 'Summary Func'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'value_col1',
		align : 'center',
		text : 'Value Col 1'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'value_col2',
		align : 'center',
		text : 'Value Col 2'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'value_col3',
		align : 'center',
		text : 'Value Col 3'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'value_col4',
		align : 'center',
		text : 'Value Col 4'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'weight_col',
		align : 'center',
		text : 'Weight Col'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'x_axes_type',
		align : 'center',
		text : 'X axes Type'
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'y_axes_type',
		align : 'center',
		text : 'Y axes Type'
	}
	]

});

