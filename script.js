const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const viagem = "22 Jun 2023";

function contdown() {
  const newViagemDate = new Date(viagem);
  const currentDate = new Date();

  const totalSeconds = (newViagemDate - currentDate) / 1000;

  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

contdown();

setInterval(contdown, 1000);
