/**
 * @class MBI.store.FxtrelNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner Excel 서식장표설정시 서식파일 설정 정보.
 */
Ext.define('MBI.store.FxtrelNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'template_name',
		type : 'string'
	}, {
		name : 'report_seq',
		type : 'number'
	}, {
		name : 'report_name',
		type : 'string'
	}, {
		name : 'template_id',
		type : 'number'
	}, {
		name : 'func_template_id',
		type : 'number'
	}, {
		name : 'func_id',
		type : 'number'
	}, {
		name : 'template_filename',
		type : 'string'
	}, {
		name : 'fac_id',
		type : 'number'
	}]
});