//https://www.google.com/maps/@16.2033834,107.138095,5.75z
	
	geo_service='http://egeosrv.opengis.vn/geoserver/gisnguonmo/wms?';
	
	
	
	//Khai bao ban do nen
	vetinh_basemap = 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}';
	road_basemap = 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}';
	
	var mbAttr='hahahah';
	
	var vetinh   = L.tileLayer(vetinh_basemap);
	
	var road  = L.tileLayer(road_basemap);
	
	
	
	var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
		layers: 'TOPO-OSM-WMS'
	});
	
	
	//Them ban do duynghia_quangnam
	var duynghia_quangnam = L.tileLayer.wms(geo_service, {
		layers: 'gisnguonmo:duynghia_quangnam',
		format: 'image/png',
		transparent: true,
		tiled: true,
	});
	
	var map = L.map('map', {
		center: [15.8425551, 108.3792469],
		zoom: 14,
		layers: [vetinh, duynghia_quangnam]
	});
	
	//Khai bao control layer
	//Ban do nen
	var baseLayers = {
		"Bản đồ Vệ tinh": vetinh,
		"Bản đồ Streets": road
	};
	
	//Ban do chuyen de
	var overlays = {		
		"Bản đồ Topo": topo,
		"Tỉnh thành": vn_tinh
	};
	
	L.control.layers(baseLayers, overlays).addTo(map);