Ext.require('Ext.ux.GMapPanel');

Ext.define('CMN.view.map.Map', {
	extend : 'Ext.panel.Panel',
	plugins : [Ext.create('CMN.plugin.Supplement')],
	
	title : 'Common Map',
	
	supplement : {
		xtype : 'form',
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [{
			xtype : 'textfield',
			fieldLabel : 'Latitude',
			name : 'latitude'
		}, {
			xtype : 'textfield',
			fieldLabel : 'Longitude',
			name : 'langitude'
		}] 
	},
	
	layout : 'fit',
	
	items : [{
		xtype : 'gmappanel',
        id: 'mymap',
        zoomLevel: 14,
        gmapType: 'map',
        mapConfOpts: ['enableScrollWheelZoom','enableDoubleClickZoom','enableDragging'],
        mapControls: ['GSmallMapControl','GMapTypeControl'],
        setCenter: {
            lat: 37.56,
            lng: 126.97
        },
        maplisteners: {
        	click: function(mevt){
        		SmartFactory.msg('Lat/Lng of Click', mevt.latLng.lat() + ' / ' + mevt.latLng.lng());
        		var input = Ext.get('ac').dom,
	    			sw = new google.maps.LatLng(39.26940,-76.64323),
	    			ne = new google.maps.LatLng(39.38904,-76.54848),
	    			bounds = new google.maps.LatLngBounds(sw,ne);
	    		var options = {
	    			location: mevt.latLng,
	    			radius: '1000',
					types: ['geocode']
				};
        	}
        }
	}]
});