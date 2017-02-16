function initMap(lat, lng) {
    var divMap = document.getElementById('map');
    var initPosition = new google.maps.LatLng(28.541693, -81.377447);
    var coords = [initPosition];
    
    var map = new google.maps.Map(divMap, {
        center: initPosition, 
        zoom: 15,
        disableDefaultUI: true,
        styles: [  // Custom map Theme :)
            {
                'featureType': 'water',
                'stylers': [
                    {
                        'visibility': 'on'
                    },
                    {
                        'color': '#b5cbe4'
                    }
                ]
            },
            {
                'featureType': 'landscape',
                'stylers': [
                    {
                        'color': '#efefef'
                    }
                ]
            },
            {
                'featureType': 'road.highway',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#83a5b0'
                    }
                ]
            },
            {
                'featureType': 'road.arterial',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#bdcdd3'
                    }
                ]
            },
            {
                'featureType': 'road.local',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#ffffff'
                    }
                ]
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#e3eed3'
                    }
                ]
            },
            {
                'featureType': 'administrative',
                'stylers': [
                    {
                        'visibility': 'on'
                    },
                    {
                        'lightness': 33
                    }
                ]
            },
            {
                'featureType': 'road'
            },
            {
                'featureType': 'poi.park',
                'elementType': 'labels',
                'stylers': [
                    {
                        'visibility': 'on'
                    },
                    {
                        'lightness': 20
                    }
                ]
            },
            {},
            {
                'featureType': 'road',
                'stylers': [
                    {
                        'lightness': 20
                    }
                ]
            }
        ]
    });

    map.setOptions({draggable: false});

    var marker = new google.maps.Marker({
        position: initPosition,
        title: '#' + coords.length,
        map: map,
        icon: 'images/badges/marker.png',
        animation: google.maps.Animation.DROP
    });
}