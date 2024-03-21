export function Kimenet(lista) {
    const tartalomELEM = document.querySelector(".tartalom")
    let txt = "";
    for (let i = 0; i < lista.length; i++) {
        txt += `<div class="elem">
                    <p>Neve: ${lista[i].nev}</p>
                    <img src="${lista[i].kep}" alt="" class="kepek">
                    <p>Leírás: ${lista[i].leiras}</p>
                </div>`
    }
    tartalomELEM.innerHTML += txt;
}

export function hatterValtozas() {
    const tartalomELEMEK = document.querySelectorAll(".elem")
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK[i].addEventListener("mouseover", function() {
            tartalomELEMEK[i].classList.add("kiv")
        })
    }
    for (let i = 0; i < tartalomELEMEK.length; i++) {
        tartalomELEMEK[i].addEventListener("mouseout", function() {
            tartalomELEMEK[i].classList.remove("kiv")
        })
    }
}
const KIVALASZTVA = [];
export function megmutat(lista) {
    const GOMB_ELEM = document.querySelector("button");
    const KIVALASZTOTT_ELEM = document.querySelector(".kivalasztott");
    GOMB_ELEM.addEventListener("click", function () {
      KIVALASZTVA.pop();
      let randomSzam = Math.floor(Math.random() * lista.length);
      let txt = `<li>${lista[randomSzam].nev}; ${lista[randomSzam].leiras}</li>`;
      KIVALASZTOTT_ELEM.innerHTML = txt;
      KIVALASZTVA.push(randomSzam);
    });
  }

