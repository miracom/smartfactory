/**
 * @class MBI.store.FtrfldNt
 * @extends Ext.data.Store
 * @author Kyunghyang
 * FormDesigner Excel 서식장표설정시 필드 설정 정보.
 */
Ext.define('MBI.store.FtrfldNt', {
	extend: 'Ext.data.Store',

	fields : [ {
		name : 'field_val_index',
		type : 'string'
	}, {
		name : 'sheet_id',
		type : 'number'
	}, {
		name : 'func_template_id',
		type : 'number'
	}, {
		name : 'func_tmp_field_id',
		type : 'number'
	}, {
		name : 'fac_id',
		type : 'number'
	}]
});