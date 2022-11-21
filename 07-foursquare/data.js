async function loadData(query, latLng, radius) {
    // the second parameter of axios.get is a configuration object
    // in the configuration object we can set the query string parameters
    // via the 'params' key
    const response = await axios.get("https://api.foursquare.com/v3/places/search", {
        params: {
            query: query,
            ll: latLng, 
            // near: "Singapore",
            v: '20210903', // indicate which version of FourSquare to use
            // sort: "DISTANCE",
            radius: radius
        },
        headers:{
            Accept: 'application/json',
            Authorization:'fsq3nFyhScVac1Z+tda7jpd/yU3I+0LdiGEOKNqJuevVJF8='
        }
    });
    return response.data;
}
