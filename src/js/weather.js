const API_KEY = "e7232fdd7e5a058baa342b1de262e42a";
const CORDS = 'cords';

function saveCoords(coordsObj) {
    localStorage.setItem(CORDS, JSON.stringify(coordsObj));
}

function handleGeoError(position) {
    console.log("cant find position")
}

function handleGeoSucces(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude,
       longitude
   };
   saveCoords(coordsObj);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(CORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        getWeather();
    }
}

function init() {
    loadCoords();
}
init();
