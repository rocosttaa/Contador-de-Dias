const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const viagem = "25 Oct 2023";

function contdown() {
  const newViagemDate = new Date(viagem);
  const currentDate = new Date();

  const totalSeconds = (newViagemDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

contdown();

setInterval(contdown, 1000);

function cotacao() {
  const url = "https://economia.awesomeapi.com.br/last/";
  const coins = "USD-BRL,EUR-BRL";

  fetch(url + coins)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const dolarReal = data.USDBRL;
      const euroReal = data.EURBRL;

      let estaData = new Date(dolarReal.create_date);

      document.getElementById("thisdate").innerHTML = estaData.toLocaleString();
      document.getElementById("venda").innerHTML = parseFloat(
        euroReal.bid
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      document.getElementById("maxvalue").innerHTML = parseFloat(
        euroReal.high
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      document.getElementById("minvalue").innerHTML = parseFloat(
        euroReal.low
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      document.getElementById("variation").innerHTML = parseFloat(
        euroReal.varBid
      ).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    });
}

cotacao();

setInterval(cotacao, 1000);
