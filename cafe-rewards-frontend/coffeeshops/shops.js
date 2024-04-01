// Top of your .js file
window.initMap = initMap;

const DEFAULT_MAP_CENTER = {lat: 18.2208, lng: -66.5901};
const mapOptions = {
    zoom: 8,
    center: DEFAULT_MAP_CENTER
};

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    createMarker(map, {lat: 18.2013, lng: -67.1397});
    // Repeat for other locations if necessary
}

function createMarker(map, coords) {
    return new google.maps.Marker({
        position: coords,
        map: map,
        //icon: 'path_to_custom_icon' // Optional: if you have a custom icon
    });
}

function reinitializeMap() {
    if (!document.hidden) {
        initMap();
    }
}

document.addEventListener('visibilitychange', reinitializeMap);
window.initMap = initMap;