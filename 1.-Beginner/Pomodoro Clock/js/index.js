const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");
const text = document.getElementById("text");
const title = document.getElementById("title");
const tiempo = {
  minutos: 24,
  segundos: 60,
  estudio: true,
};
let intervalCount = 0;
start.addEventListener("click", () => {
  intervalCount = setInterval(conteo, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(intervalCount);
});
restart.addEventListener("click", () => {
  clearInterval(intervalCount);
  text.innerHTML = "00 : 00";
  tiempo.minutos = 24;
  tiempo.segundos = 60;
});

const conteo = () => {
  tiempo.estudio
    ? (title.innerHTML = "STAY FOCUS")
    : (title.innerHTML = "TAKE A BREAK");

  if (tiempo.minutos === 0 && tiempo.segundos === 0) {
    if (tiempo.estudio) {
      tiempo.minutos = 4;
      tiempo.segundos = 60;
      tiempo.estudio = false;
    } else {
      tiempo.minutos = 24;
      tiempo.segundos = 60;
      tiempo.estudio = true;
    }
  } else if (tiempo.segundos === 0) {
    tiempo.minutos -= 1;
    tiempo.segundos = 60;
  } else {
    tiempo.segundos -= 1;
  }
  text.innerHTML = `${tiempo.minutos} : ${tiempo.segundos}`;
};
