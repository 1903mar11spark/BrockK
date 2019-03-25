//  url --location --request GET "https://ebird.org/ws2.0/ref/hotspot/{{regionCode}}?fmt=csv" \
 //  --header "X-eBirdApiToken: {{x-ebirdapitoken}}"


 // nearby hotspots
 // https://ebird.org/ws2.0/ref/hotspot/geo?lat={{lat}}&lng={{lng}}&fmt=json

 
// curl --location --request GET "https://ebird.org/ws2.0/ref/region/list/subnational2/US-FL.json" \
 //  --header "X-eBirdApiToken: op1smbpm4jnh"

//NEED TO PUT BUTTON BACK ON::::

//  window.onload=function(){
//     var btnState = document.getElementById("btnState");
//     btnState.addEventListener("click", getSelectedOption);
// }
let updateContent = function() {
    
    const birdInfoElement = document.getElementById("textArea");
    birdInfoElement.innerText = "Recent Sightings:" + state;
}

function getSelectedOption() {
    
    let stList = (document.getElementById(st));
    let stAbbr = st.value;
    console.log(st.value);
    console.log(stAbbr);

fetch("https:ebird.org/ws2.0/ref/region/list/subnational2/US-FL.json", {method: "GET", headers:{"Accept":"application/json", "X-eBirdApiToken": "op1smbpm4jnh"}})

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data));
        state = JSON.stringify(data);

        const birdy = data[0];
        console.log(birdy);

        updateContent(); //update the tet area with readable data
    
 })
}