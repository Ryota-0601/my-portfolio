const mainPhoto = document.getElementById("main-photo");

let photoslide = [
  { image: "heart2.jpg" },
  { image: "geek2.jpg" },
  { image: "hurdle.jpg" },
  { image: "runrun.jpg" },
  { image: "mountain2.jpg" },
  { image: "syuugou.jpg" },
  { image: "track.jpg" },
];

let x = 0;
mainPhoto.src = "./images/" + photoslide[0].image;

const changePhoto = function () {
  if (x < photoslide.length) {
    mainPhoto.src = "./images/" + photoslide[x].image;
    x += 1;
  } else {
    x = 0;
    mainPhoto.src = "./images/" + photoslide[x].image;
    x += 1;
  }
};

const countPhoto = function () {
  setInterval(changePhoto, 3000);
};
countPhoto();

const bannzyPhoto = document.getElementById("bannzy-photo");
const bannzyButton = document.getElementById("bannzy-button");

let bannzyslide = [
  { image: "bannzy1.jpg" },
  { image: "bannzy2.jpg" },
  { image: "bannzy3.jpg" },
  { image: "bannzy4.jpg" },
  { image: "bannzy5.jpg" },
  { image: "bannzy6.jpg" },
  { image: "bannzy7.jpg" },
  { image: "bannzy8.jpg" },
  { image: "bannzy9.jpg" },
  { image: "bannzy10.jpg" },
  { image: "bannzy11.jpg" },
];

let i = 0;
bannzyPhoto.src = "./images/" + bannzyslide[0].image;

const bannzyJump = function () {
  if (i < bannzyslide.length) {
    bannzyPhoto.src = "./images/" + bannzyslide[i].image;
    i += 1;
  } else {
    i = 0;
    bannzyPhoto.src = "./images/" + bannzyslide[i].image;
  }
};

let id = null;
bannzyButton.onclick = function () {
  if (id === null) {
    id = setInterval(bannzyJump, 500);
    bannzyButton.textContent = "Stop!";
  } else {
    clearInterval(id);
    id = null;
    bannzyButton.textContent = "Bungy!!!!";
  }
};

const omikuzi = document.getElementById("omikuzi");
const omikuziDisplay = document.getElementById("omikuzi-display");
const omikuziImage = document.getElementById("omikuzi-image");
const omikuziButton = document.getElementById("omikuzi-button");

let omikuziImages = [
  { image: "daikiti.PNG" },
  { image: "tyukiti.PNG" },
  { image: "syoukiti.PNG" },
  { image: "suekiti.PNG" },
  { image: "daikyou.PNG" },
];
