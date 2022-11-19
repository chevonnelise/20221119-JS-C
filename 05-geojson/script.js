// latlng is representative of an array
// index 0 is the latitude
// index 1 is the longitude
let singapore = [1.29, 103.85]

// L is provided by leaflet.js
// L is the leaflet object and it allows us to features from Leaflet
// the first parameter to the map function is the ID of the <div> that will hold
const map = L.map('map');
map.setView(singapore, 13);

// the tile layer basically represents the map you can see
// when we set up the tile layer we're requesting a visual style of the map

// setup the tile layers
const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
});

// reminder: universal thing with leaflet.
// after you created a Layer, you must add it to the map to display it
tileLayer.addTo(map); // alternatively: map.add(tileLayer);

// axios.get is an asynchronous function
// takes a long time to finish and so it is designed as an asynchronous function
// async JavaScript will not wait for axios.get to finish. It will move to the next line immediately
// const response = axios.get("cycling-path-network-geojson.geojson").then(function(response) {
//     console.log(response)
//     console.log("data has been loaded")
// });
// console.log("after") 

//loadData is an async function
// It has to be an async function because it is using await inside
loadData();

// JavaScript has function hoisting.
// any functions we define will be automatically bring to the top of the JS file
async function loadData() {
    // await: tell JavaScript to pause the function
    // at the point that we await until axios has finished

    // important: axios.get requires a URL
    // in this case we are using a relative URL
    const response = await axios.get("cycling-path.geojson");

    // display the content of the geojson file on the map
    // response.data holds the actual data from the geojson file
    // the second parameter of L.geoJson is a configuration object
    const cyclingLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            console.log(feature);
            layer.bindPopup(feature.properties.Description);
        }
    });
    cyclingLayer.addTo(map);
}
// outside of the async function, JavaScript will not wait

// console.log("foobar");





