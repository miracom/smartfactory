/**
 * @class MBI.controller.MBIController
 * @extends Ext.app.Controller
 * @author KKH.
 * Form Designer의 View를 관리하는 컨트롤러.
 * @cfg {String[]} views 모듈에서 초기에 사용하는 view의 선언명 배열.
 * @cfg {String[]} views 모듈에서 초기에 사용하는 model의 선언명 배열.
 * @cfg {String[]} views 모듈에서 초기에 사용하는 store의 선언명 배열.
 */
Ext.define('MBI.controller.MBIController', {
	extend: 'Ext.app.Controller',
	
	stores: ['MBI.store.SecfundefNt','MBI.store.FormDesign'],
	models: [],
	views: ['MBI.view.common.FormDesign'],
	
	init: function() {
		this.control({
			'viewport': {
				afterrender: this.onViewportRendered
			}
		});
	},
	
	/**
	 * @event onViewportRendered
	 * afterrender시 표시할 View Class를 해당 영역(Nav, Content, east, top, bottom)에 표시한다.
	 */
	onViewportRendered: function() {
		SmartFactory.addNav('MBI.view.common.NavFormlist', {
			iconCls:'iconsetDockReport',
			itemId : 'navReport',
			title : 'Report Forms'
		});
	}
});
