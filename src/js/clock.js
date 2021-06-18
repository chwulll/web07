const clock = document.querySelector("#clock");

// padStart(maxStringLength, addText)
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}`;
}

// 1second setInterval
getClock();
setInterval(getClock, 1000);