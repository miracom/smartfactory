/*include할 class를 선언한다.*/
Ext.require([ 'Ext.ux.exporter.Exporter' ]);

/**
 * @class MBI.view.form.BaseForm1G
 * It has one grid in this panel.
 * 
 * **include** : Ext.ux.exporter.Exporter
 * 
 * @extends Ext.panel.Panel
 * @author kyunghyang.
 * 
 * @cfg {String} itemId
 * An itemId can be used as an alternative way to get a reference to a component when no object reference is available.
 */
Ext.define('MBI.view.form.BaseForm1G', {
	/*부모 클래스를 정의한다.*/
	/**
	 * @cfg {String} extend 부모 클래스를 정의한다.
	 */
	extend : 'Ext.panel.Panel',
	
	/*외부에서 참조할 plugins를 설정한다.*/
	/**
	 * @cfg {Object[]}plugins plugins을 설정한다.
	 */
	plugins : [ Ext.create('CMN.plugin.Supplement') ],
	
	/*컴포넌트의 기능 관련된 설정을 한다.*/
	/**
	 * @cfg {Boolean} exportable excel의 출력여부를 설정한다.
	 */
	exportable : true,
	
	/*부모 레이아웃과 관련된 자신의 컴포넌트 속성을 정의한다. id, title, flex, width*/
	/**
	 * @cfg {Boolean} autoScroll 화면의 scroll 사용여부를 설정한다.
	 * @cfg {String} bodyStyle 컴포턴트 스타일을 적용한다.
	 */
	autoScroll : true,// false,
	//bodyStyle : 'padding:5px',
	
	/* 컨테이너로서의 속성 : layout, defaults, tools, items 등을 정의한다. 단, 복잡한 items, docked
	  items 등은 initComponent에서 등록을 권장한다.*/
	/**
	 * @cfg {String/Object} layout 컴포턴트 layout을 적용한다.
	 * @cfg {Object[]} buttons 컴포턴트에 사용할 button을 서정한다.
	 */
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	
	/**
	 * Init Component 와 같은기능을 한다. 
	 * store의 Data가 변경시 화면을 다시 출력한다.
	 * **setSupplement** : 우측영역에 설정값으로 조회조건 컨드롤들을 표시한다.
	 * **storeInfo** : 화면에 출력할 데이터를 서버로부터 가져온다.
	 * **view_grid** : 설정정보로 grid를 설정하고 구성한다.
	 * **view_control** : 설정정보로 이벤트 버튼을 구성한다.
	 */
	setup : function() {

		this.setSupplement(Ext.create('MBI.view.form.builder.ConditionBuilder', {
			formInfoData : this.store.data,
			funcId : this.funcId,
			langFlag : this.langFlag,
			client : this,
			viewHandler : this.onView
		}).buildCondition());

		this.storeInfo = Ext.create('MBI.view.form.builder.StoreBuilder', {
			formInfoData : this.store.data,
			funcId : this.funcId,
			langFlag : this.langFlag,
			spreadId : 1
		}).buildStore();

		var view_grid = Ext.create('MBI.view.form.builder.GridBuilder', {
			formInfoData : this.store.data,
			langFlag : this.langFlag,
			store : this.storeInfo,
			flex : 1,
			spreadId : 1,
			panelId : this.id,
			clickRecord : this.onClickGrid
		}).buildGrid();
		
		var view_control = Ext.create('MBI.view.form.builder.ControlBuilder');
		
		this.add(view_grid);
		this.add(view_control);
			
	},
	buildToolbar : function(){
		return Ext.create('Ext.toolbar.Toolbar',{
			height : 30,
			layout : {
				type : 'hbox',
				pack : 'start'
			},
			items : [ {
				xtype : 'tbfill'
			}, {
				xtype : 'exporterbutton',
			}]
		});
	},
	
	/**
	 * grid의 레코드를 선택시 해당 정보를 조회에 필요한 item에 전달한다. 
	 * @param selModel
	 * @param selected
	 */
	onClickGrid : function(selModel, selected) {
    	//alert('record :'+selected[0].data.test_id); 
    },
    /**
     * condition form에서 'view'를 클릭시 해당 조건정보를 읽어와 SP에 필요한 형태로 값을 변환한다.
     * @param {Object/Object[]} params 조회조건 정보
     * @returns {String} 조회조건을 구분하여 string형태로 반환한다.
     * number(condition seq no) `^(구분자) value(조건값) |(구분자)
     * ex: '1`^1|2`^|3`^|' 
     */
	buildCondParam : function(params) {
		var mapconGenNt = this.store.data.get(0).data.mapconGenNt;
		var con_params = '';
		var value = '';

		for(var i in mapconGenNt){
			if (!params['C'+mapconGenNt[i].con_seq])
				 value = '';
			else
				value = params['C'+mapconGenNt[i].con_seq];
			
			if(value instanceof Array) {
				con_params += mapconGenNt[i].con_seq +'`^';
				for(var j in value)
					con_params += value[j] + '|';
			}
			else
				con_params += mapconGenNt[i].con_seq +'`^' + value + '|';
		};
		console.log(con_params);
		return con_params; //ex: '1`^1|2`^|3`^|';
	},

	/**
	 * conditon form에서 'view' 클릭시 해당조건을 읽어와 store를 다시 읽어 온다.
	 * @param params
	 */
	onView : function(params) {
		//console.log(params);
		var extraParam = {
			func_id : this.funcId,
			spd_id : '1', // set input data for base2G
			param : null,
			cond_param : this.buildCondParam(params),
			lang_flag : this.langFlag,
		};
		this.storeInfo.load({params : extraParam});
	}

});
