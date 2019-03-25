fetch("https://ebird.org/ws2.0/data/obs/US-FL/recent", {
  mode: "cors",
  headers: {
    "x-ebirdapitoken": "u146ffv75gru"
  }
})
  .then(response => response.json())
  .then(response => {

    //the request is returning an array of objects
    const firstBird = response[0];

    console.log(firstBird);
    console.log(firstBird.comName);
    console.log(firstBird.sciName);
    console.log(firstBird.locName);


    const myBirdLocation = `bird location: ${firstBird.locName}`;

    const another = "bird location: " + firstBird.locName;

    let htmlText = "";
    response.forEach(bird => {
      htmlText += getBirdHtml(bird);
    });

    //load it into the div
    document.querySelector("#birdInfo").innerHTML = htmlText;
  });

//define function to build html for the species
const getBirdHtml = bird => {
  return `
      <div class="bird">
        <h3>${bird.comName}</h3>
        <p>Sci Name: ${bird.sciName}</p>
        <p>Location: ${bird.locName}</p>
      </div>
    `;
};


