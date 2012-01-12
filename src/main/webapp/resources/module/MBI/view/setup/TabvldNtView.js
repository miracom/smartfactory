Ext.define('MBI.view.setup.TabvldNtView', {
	extend: 'Ext.grid.Panel',
	
	autoScroll : true,
	
	columns : [{
    		dataIndex : 'spread_id',
    		type : 'number',
    		text : 'spread_id'
    	}, {
    		dataIndex : 'ref_col2',
    		align : 'center',
    		text :'ref_col2'
    	}, {
    		dataIndex : 'ref_col1',
    		align : 'center',
    		text :'ref_col1'
    	}, {
    		dataIndex : 'tab_valid_id',
    		type : 'number',
    		text : 'tab_valid_id'
    	}, {
    		dataIndex : 'valid_seq',
    		type : 'number',
    		text : 'valid_seq',
    	}, {
    		dataIndex : 'func_id',
    		type : 'number',
    		text : 'func_id'
    	}, {
    		dataIndex : 'ref_val1',
    		align : 'center',
    		text :'ref_val1'
    	}, {
    		dataIndex : 'check_col',
    		align : 'center',
    		text :'check_col'
    	}, {
    		dataIndex : 'ref_val2',
    		align : 'center',
    		text :'ref_val2'
    	}, {
    		dataIndex : 'fac_id',
    		type : 'number',
    		text : 'fac_id'
    	}, {
    		dataIndex : 'valid_type',
    		align : 'center',
    		text :'valid_type'
    	}
	]
});