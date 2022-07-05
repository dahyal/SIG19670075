var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_grobogan_0 = new ol.format.GeoJSON();
var features_grobogan_0 = format_grobogan_0.readFeatures(json_grobogan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_grobogan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_grobogan_0.addFeatures(features_grobogan_0);var lyr_grobogan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_grobogan_0, 
                style: style_grobogan_0,
    title: 'grobogan<br />\
    <img src="styles/legend/grobogan_0_0.png" /> BRATI<br />\
    <img src="styles/legend/grobogan_0_1.png" /> GABUS<br />\
    <img src="styles/legend/grobogan_0_2.png" /> GEYER<br />\
    <img src="styles/legend/grobogan_0_3.png" /> GODONG<br />\
    <img src="styles/legend/grobogan_0_4.png" /> grobogan<br />\
    <img src="styles/legend/grobogan_0_5.png" /> GROBOGAN<br />\
    <img src="styles/legend/grobogan_0_6.png" /> GUBUG<br />\
    <img src="styles/legend/grobogan_0_7.png" /> KARANGAYUNG	 <br />\
    <img src="styles/legend/grobogan_0_8.png" /> KEDUNGJATI<br />\
    <img src="styles/legend/grobogan_0_9.png" /> KLAMBU<br />\
    <img src="styles/legend/grobogan_0_10.png" /> KRADENAN<br />\
    <img src="styles/legend/grobogan_0_11.png" /> NGARINGAN<br />\
    <img src="styles/legend/grobogan_0_12.png" /> PENAWANGAN<br />\
    <img src="styles/legend/grobogan_0_13.png" /> PULOKULON<br />\
    <img src="styles/legend/grobogan_0_14.png" /> PURWODADI<br />\
    <img src="styles/legend/grobogan_0_15.png" /> TANGGUNGHARJO<br />\
    <img src="styles/legend/grobogan_0_16.png" /> TAWANGHARJO <br />\
    <img src="styles/legend/grobogan_0_17.png" /> TEGOWANU<br />\
    <img src="styles/legend/grobogan_0_18.png" /> TOROH<br />\
    <img src="styles/legend/grobogan_0_19.png" /> WIROSARI<br />\
    <img src="styles/legend/grobogan_0_20.png" /> <br />'
        });var format_RiceMill_1 = new ol.format.GeoJSON();
var features_RiceMill_1 = format_RiceMill_1.readFeatures(json_RiceMill_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiceMill_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RiceMill_1.addFeatures(features_RiceMill_1);var lyr_RiceMill_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RiceMill_1, 
                style: style_RiceMill_1,
                title: '<img src="styles/legend/RiceMill_1.png" /> Rice Mill'
            });

lyr_grobogan_0.setVisible(true);lyr_RiceMill_1.setVisible(true);
var layersList = [baseLayer,lyr_grobogan_0,lyr_RiceMill_1];
lyr_grobogan_0.set('fieldAliases', {'id': 'id', 'KECAMATAN': 'KECAMATAN', 'JUMLAHPADI': 'JUMLAHPADI', });
lyr_RiceMill_1.set('fieldAliases', {'Rice Mill': 'Rice Mill', 'Alamat': 'Alamat', });
lyr_grobogan_0.set('fieldImages', {'id': 'TextEdit', 'KECAMATAN': 'TextEdit', 'JUMLAHPADI': 'TextEdit', });
lyr_RiceMill_1.set('fieldImages', {'Rice Mill': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_grobogan_0.set('fieldLabels', {'id': 'no label', 'KECAMATAN': 'no label', 'JUMLAHPADI': 'no label', });
lyr_RiceMill_1.set('fieldLabels', {'Rice Mill': 'no label', 'Alamat': 'no label', });
lyr_RiceMill_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});