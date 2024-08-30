const clock = document.querySelector("h3#clock");

function getTime() {
  const date = new Date();
  let [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()]
    .map(String)
    .map((element) => element.padStart(2, "0"));
  clock.innerText = `${h}:${m}:${s}`;
}

getTime();
setInterval(getTime, 1000);
