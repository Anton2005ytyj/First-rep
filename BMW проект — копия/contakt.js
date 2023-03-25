navigator.geolocation.getCurrentPosition(function(position){
    let coords = position.coords;
    console.log(coords);
    let latitude = position.coords.latitude;//Широта
    let longitude = position.coords.longitude; //Долгота
    let map = new ol.Map({ //создаем карту из библиотеки OpenLayers
        target: 'map', //указываем id контейнера для карты
        layers: [ //создаем массив, в котором указываем источник данных для карты
            new ol.layer.Tile({
                source: new ol.source.OSM() // наша карта берет данные из OpenStreetMap
            })
        ],
        view: new ol.View({  // настройка внешнего вида карты
            center: ol.proj.fromLonLat([longitude, latitude]), //широта и долгота
            zoom: 18 //увеличение
        })
    })
});
