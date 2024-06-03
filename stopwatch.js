const stopWatch = document.querySelector(".js-watch");
const start = document.querySelector(".js-start");
const stop = document.querySelector(".js-stop");
const reset = document.querySelector(".js-reset");


start.addEventListener("click", startClock);
stop.addEventListener("click", stopClock);
reset.addEventListener("click", resetClock);

let secondsElapsed = 0;
let intervalId;

function startClock() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    secondsElapsed++;
    setTime();
  }, 1000);
};

function setTime() {
  const minute = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
  const second = String(secondsElapsed % 60).padStart(2, "0") ;

  stopWatch.innerHTML = `${minute}:${second}`;
}


function stopClock() {
  clearInterval(intervalId);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  stopWatch.innerHTML = `00:00`

}