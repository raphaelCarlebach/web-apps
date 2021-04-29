import keys from "../../config.js"

mapboxgl.accessToken = keys.mapbox_accessToken;

navigator.geolocation.getCurrentPosition(seccess, error, {
    highAccuracy: true
});

function seccess(position) {
    console.log(position)
    createMap([position.coords.longitude, position.coords.latitude])
};

function error() {
    createMap([35.21, 31.77])
};

function createMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14
    });  

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        zoom: 20,
    });

    map.addControl(directions, 'top-left');

    var coordinatesGeocoder = function (query) {
        var matches = query.match(
        /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
        );
        if (!matches) {
        return null;
        }

        function coordinateFeature(lng, lat) {
            return {
            center: [lng, lat],
            geometry: {
            type: 'Point',
            coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
            };
            }
             
            var coord1 = Number(matches[1]);
            var coord2 = Number(matches[2]);
            var geocodes = [];
             
            if (coord1 < -90 || coord1 > 90) {
            geocodes.push(coordinateFeature(coord1, coord2));
            }
             
            if (coord2 < -90 || coord2 > 90) {
            geocodes.push(coordinateFeature(coord2, coord1));
            }
             
            if (geocodes.length === 0) {
            geocodes.push(coordinateFeature(coord1, coord2));
            geocodes.push(coordinateFeature(coord2, coord1));
            }
             
            return geocodes;
            };

    const search =   new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 10,
        placeholder: 'Search...',
        mapboxgl: mapboxgl
    })

        map.addControl(search,'top-right' );      
        
        const nav = new mapboxgl.NavigationControl();

        map.addControl(nav,"bottom-right");      

};

