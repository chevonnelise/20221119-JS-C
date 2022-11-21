const BASE_API_URL="https://www.ombapi.com/";

document.querySelector("#searchBtn")
    .addEventListener("click", async function() {
        let title = document.querySelector("#title").value;
        // select the element with class "type" and is checked
        let type = document.querySelector(".type:checked").value;

        const response = await axios.get(BASE_API_URL,{
            params:{
                "apikey":"1891b5a6",
                "s": title,
                "type":type
            }
        })
        console.log(response.data);
    })