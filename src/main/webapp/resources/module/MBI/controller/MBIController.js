/**
 * @class MBI.controller.MBIController
 * Form Designer의 View를 관리하는 컨트롤러.
 * @extends Ext.app.Controller
 * @author Kyunghyang
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
	
	/*
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
