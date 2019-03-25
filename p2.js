


fetch("https://ebird.org/ws2.0/ref/hotspot/geo?lat=27.95&lng=-82.45&fmt=json", {
  mode: "cors",
  headers: {
    "x-ebirdapitoken": "u146ffv75gru"
  }
})
//Latitude and Longitude are for Tampa FL
// https://ebird.org/ws2.0/ref/hotspot/geo?lat={{27.950575}}&lng={{-82.457176}}&fmt=json

  .then(response => response.json())
  .then(response => {

    const firstBird = response[0];

    console.log(firstBird);
    console.log(firstBird.lat);
    console.log(firstBird.lng);
    


    const myBirdLocation = `bird location: ${firstBird.locName}`;
  
    const another = "bird location: " + firstBird.locName;

    let htmlText = "";
    response.forEach(bird => {
      htmlText += getBirdHtml(bird);
    });

    //load it into the div
    document.querySelector("#hotspotTextArea").innerHTML = htmlText;
  });

//define function to build html for the species
const getBirdHtml = bird => {
  return `
      <div class="bird">
        <h3>${bird.locName}</h3>
        
        <p>Latitude: ${bird.lat}</p>
        <p>Longitude: ${bird.lng}</p>
      </div>
    `;
};