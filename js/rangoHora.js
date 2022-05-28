$(function () {
  $("#slider-range").slider({
    range: true,
    min: 540,
    max: 1440,
    values: [540, 1440],
    slide: function (event, ui) {
      $("#amount").val(convertMsToHM((ui.values[0])) + " - " + convertMsToHM((ui.values[1])));
      filter();
    }
  });
  $("#amount").val(convertMsToHM($("#slider-range").slider("values", 0)) +
    " - " + convertMsToHM($("#slider-range").slider("values", 1)));
  filter();
});

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToHM(minutes) {
  let hours = Math.floor(minutes / 60);

  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;

}

function filter() {
  let lower = parseInt((document.getElementById("amount").value).substring(0, 2)) * 60 + parseInt((document.getElementById("amount").value).substring(3, 5))
  let upper = parseInt((document.getElementById("amount").value).substring(8, 10)) * 60 + parseInt((document.getElementById("amount").value).substring(11, 13))
  if (upper == 0) upper = 24 * 60;

  const collection = document.getElementsByClassName("bHora");
  var a;

  Array.from(collection).forEach((element) => {
    a = parseInt((element.textContent || element.innerText).substring(0, 2)) * 60 + parseInt((element.textContent || element.innerText).substring(3, 5));
    if (!rango(a, lower, upper)) {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}

function rango(num, low, high) {
  if (low <= num && high >= num) {
    return true;
  } else {
    return false;
  }
}

function press() {
  if (document.getElementById("flexSwitchCheckDefault").checked) {
    document.getElementById("flexSwitchCheckDefault").checked = false;
  } else {
    document.getElementById("flexSwitchCheckDefault").checked = true;
  }
  cambioDeModo();
}

function cambioDeModo() {
  if (document.getElementById("flexSwitchCheckDefault").checked) {
    const cartas = document.getElementsByClassName("carta");
    const informaciones = document.getElementsByClassName("informacion");
    const fondos = document.getElementsByClassName("fondo");
    const botones = document.getElementsByClassName("bHora");

    Array.from(cartas).forEach((element) => {
      element.style.backgroundColor = "#145c9e";
    });
    Array.from(informaciones).forEach((element) => {
      element.style.backgroundColor = "#eff9f0";
    });
    Array.from(fondos).forEach((element) => {
      element.style.backgroundColor = "#fdd189";
    });
    Array.from(botones).forEach((element) => {
      element.style.backgroundColor = "#000000";
      element.style.color = "#ffffff";
    });
  }
  else {
    const cartas = document.getElementsByClassName("carta");
    const informaciones = document.getElementsByClassName("informacion");
    const fondos = document.getElementsByClassName("fondo");
    const botones = document.getElementsByClassName("bHora");

    Array.from(cartas).forEach((element) => {
      element.style.backgroundColor = "#3B339B";
    });
    Array.from(informaciones).forEach((element) => {
      element.style.backgroundColor = "#F0A6BB";
    });
    Array.from(fondos).forEach((element) => {
      element.style.backgroundColor = "lightgray";
    });
    Array.from(botones).forEach((element) => {
      element.style.backgroundColor = "lightgray";
      element.style.color = "#000000";
    });
  }
}

function cambioDeModo2() {
  if (document.getElementById("flexSwitchCheckDefault").checked) {
    const carta = document.getElementsByClassName("carta"); //listo
    const carta2 = document.getElementsByClassName("carta2"); //listo
    const carta3 = document.getElementsByClassName("carta3");//ñisto
    const fondoGeneral = document.getElementsByClassName("fondoGris");
    const fondos = document.getElementsByClassName("fondo");//creo que listo
    const botones = document.getElementsByClassName("bHora"); //listo

    Array.from(carta).forEach((element) => {
      element.style.backgroundColor = "#eff9f0";
    });
    Array.from(carta2).forEach((element) => {
      element.style.backgroundColor = "#eff9f0";
    });
    Array.from(carta3).forEach((element) => {
      element.style.backgroundColor = "#eff9f0";
    });
    Array.from(fondoGeneral).forEach((element) => {
      element.style.backgroundColor = "#fdd189";
    });
    Array.from(fondos).forEach((element) => {
      element.style.backgroundColor = "#145c9e";
    });
    Array.from(botones).forEach((element) => {
      element.style.backgroundColor = "#000000";
      element.style.color = "#ffffff";
    });
  }
  else {
    const carta = document.getElementsByClassName("carta");
    const carta2 = document.getElementsByClassName("carta2");
    const carta3 = document.getElementsByClassName("carta3");
    const fondoGeneral = document.getElementsByClassName("fondoGris");
    const fondos = document.getElementsByClassName("fondo");
    const botones = document.getElementsByClassName("bHora");

    Array.from(carta).forEach((element) => {
      element.style.backgroundColor = "#F0A6BB";
    });
    Array.from(carta2).forEach((element) => {
      element.style.backgroundColor = "#F0A6BB";
    });
    Array.from(carta3).forEach((element) => {
      element.style.backgroundColor = "#F0A6BB";
    });
    Array.from(fondoGeneral).forEach((element) => {
      element.style.backgroundColor = "lightgray";
    });
    Array.from(fondos).forEach((element) => {
      element.style.backgroundColor = "3B339B";
    });
    Array.from(botones).forEach((element) => {
      element.style.backgroundColor = "lightgray";
      element.style.color = "#000000";
    });
  }
}