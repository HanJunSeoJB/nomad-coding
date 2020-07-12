const body = document.querySelector("body");
const IMG_NUMBER = 5;

function handleImgLoad() {
    console.log('finished loading');
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `res/img/${imgNumber}.jpg`;
    image.classList.add("bgImg");
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER+1);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();