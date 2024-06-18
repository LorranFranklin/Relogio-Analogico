let digital = document.querySelector(".digital");
let segundos = document.querySelector(".p_s");
let minutos = document.querySelectorAll(".p_m");
let hora = document.querySelector(".p_h");

function relogio() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;
  if (ss < 10) ss = "0" + ss;

  digital.innerHTML = `${hh}:${mm}:${ss}`;

  let anguloSegundos = (360 / 60) * ss - 90;
  let anguloMinutos = (360 / 60) * mm - 90;
  let anguloHoras = (360 / 12) * hh - 90;

  segundos.style.transform = `rotate(${anguloSegundos}deg)`;
  minutos[0].style.transform = `rotate(${anguloMinutos}deg)`;
  hora.style.transform = `rotate(${anguloHoras}deg)`;

}

setInterval(relogio, 1000);
relogio();
