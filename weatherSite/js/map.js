function initMap() {
    // Map options
    const options = {
        zoom: 5,
        center: {lat:12.8797,lng:121.7740}
    }

    // New map
    const map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker
    const marker = new google.maps.Marker({
        position: {lat:7.1907, lng:-125.4553},
        map:map,
        icon:''
    });
}