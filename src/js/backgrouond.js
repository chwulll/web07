const images = [
  "00.jpg", "01.jpg", "02.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `src/image/${chosenImage}`;

document.body.appendChild(bgImg);