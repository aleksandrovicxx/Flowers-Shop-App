let brojRuža = document.getElementById("ruže");
let brojLjiljana = document.getElementById("ljiljani");
let brojGerbera = document.getElementById("gerberi");
let btnIzračunaj = document.getElementById("izračunaj");
let h1 = document.getElementById("vašaPorudžbina");
let tabela = document.getElementById("tabela")
let red1 = document.getElementById("red1")
let red2 = document.getElementById("red2")
let red3 = document.getElementById("red3")
let ispisPoklona = document.getElementById("ispispoklona")
let odabrani_pokloni = []
let ZaIspisCene = document.getElementById('ispiscene')
let ParagrafZaPopust = document.getElementById("paragrafZaCenuSaPopusotm")

btnIzračunaj.addEventListener("click", () => {
    let ukupna_cena_za_cveće = (150*Number(brojRuža.value))+(120*Number(brojLjiljana.value))+(70*Number(brojGerbera.value));
    let ukupna_cena_za_poklone = 0;
    let pokloni = document.querySelectorAll("input[name='poklon']:checked");
    pokloni.forEach((poklon, indeks) => {
        odabrani_pokloni[indeks] = poklon.value;
        ukupna_cena_za_poklone+=500;
    });
    let ukupna_cena = ukupna_cena_za_cveće + ukupna_cena_za_poklone;
    let desetposto = ukupna_cena*0.1
    let cena_sa_popustom = ukupna_cena - desetposto
    
    h1.innerHTML = "Vaša porudžbina:";
    for (let i = 0; i < brojRuža.value; i++){
        red1.innerHTML += `<td><img src="Ruža.png" alt="" width="80px" height="80px"></td>`
    }
    for (let i = 0; i < brojLjiljana.value; i++){
        red2.innerHTML += '<td> <img src="Ljiljan.png" alt="" width="80px" height="80px"></td>'
    }
    for (let i = 0; i < brojGerbera.value; i++){
        red3.innerHTML += '<td> <img src="Gerber.png" alt="" width="80px" height="80px"></td>'
    }
    odabrani_pokloni.forEach(poklon => {
        ispisPoklona.innerHTML += `+ ${poklon} <br>`
    });
    
    let plaćanje = document.querySelector("input[name='plaćanje']:checked")
    if (plaćanje.value == "kartica" && ukupna_cena > 2000 ) {
        ZaIspisCene.innerHTML += `<p>Cena bez popusta je ${ukupna_cena} <p> <br> <p style="font-size: 25px;">Cena sa popustom je: <b>${cena_sa_popustom} din<b></p>`

    } else {
        ZaIspisCene.innerHTML = `<h2> Cena za placanje: ${ukupna_cena} din </h2>`
    }
});

/*
let inputOperacija = document.querySelector("input[name='operacija']:checked");
*/