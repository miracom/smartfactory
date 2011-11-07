Ext.define('CMN.model.Favorite', {
	extend : 'Ext.data.Model',

	fields : [ {
		name : 'factory',
		type : 'string'
	}, {
		name : 'program_id',
		type : 'string'
	}, {
		name : 'user_id',
		type : 'string'
	}, {
		name : 'seq_num',
		type : 'string'
	}, {
		name : 'func_name',
		type : 'string'
	}, {
		name : 'user_func_desc',
		type : 'string'
	} ]
});
