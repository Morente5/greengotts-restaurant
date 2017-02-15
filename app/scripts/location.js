function initMap(lat, lng) {
    const divMap = document.getElementById('map');
    const initPosition = new google.maps.LatLng(28.541455, -81.375923);
    const coords = [initPosition];
    
    const map = new google.maps.Map(divMap, {
        center: initPosition, 
        zoom: 16,
        disableDefaultUI: true
    });

    const marker = new google.maps.Marker({
        position: initPosition,
        title: '#' + coords.length,
        map: map,
        icon: 'images/badges/marker.png',
        animation: google.maps.Animation.DROP
    });
}


initMap(37.171204, -3.598550);