//const campground = require("../models/campground");

//const campground = require("../../models/campground");

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', 
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 8 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({offest:25})
        .setHTML(
            `<h6>${campground.title}</h6><p>${campground.location}</p?`
        )
    )
    .addTo(map)