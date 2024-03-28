function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: { lat: 18.2208, lng: -66.5901 } // Coordinates for Puerto Rico
    };

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Add marker function
    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
            //icon: 'path_to_custom_icon' // Optional: if you have a custom icon
        });
    }

    // Add markers for each location
    // These could be dynamic based on data from the backend
    addMarker({ lat: 18.2013, lng: -67.1397 }); // Example: Mayaguez
    // Repeat for other locations
}

// Make sure to attach initMap to the window object if it's not in global scope
window.initMap = initMap;
