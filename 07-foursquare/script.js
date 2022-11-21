async function main() {
    // call the init function;
    init()

    function init(){
        let map = initMap();
        
        document.querySelector("search-btn").addEventListerner("click", async function() {
            const searchTerms = document.querySelector("search-terms").value;
            const center = map.getBounds().getCenter();
            const ll = center.lat + "," + center.lng;
            const results = await loadData(searchTerms, 11, 2000);
            console.log(results);
            for (let r of results) {
                const lat = r.
            }
        })
    }
    const centerPoint = [1.29, 103.85];
    const map = L.map("map");
    map.setView(centerPoint, 13);
    // const results = await loadData("chicken rice", "1.3061,103.8832", 1000);
    // console.log(results);
    const tileLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
})
    tileLayer.addTo(map);
}
main();