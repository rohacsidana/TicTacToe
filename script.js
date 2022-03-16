window.addEventListener("load", init)

var szamlalo = 0
var X = "<p>X</p>"
var O = "<p>O</p>"
var elsoJatekos = "1"
var masodikJatekos = "2"
function $(elem) {
    return document.querySelectorAll(elem)
}
function ID(elem) {
    return document.getElementById(elem)
}
function init() {
    var txt = '';


    for (let i = 0; i < 9; i++) {
        txt += "<div class=" + "gomb" + "></div>"
    }
    ID("jatek").innerHTML += txt
    var elem = $("section div")
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", beleir)
        elem[i].addEventListener("mouseover", hover)
        elem[i].addEventListener("mouseout", hoverOff)
    }

}
function beleir() {
    
    if (szamlalo % 2 === 0) {
        event.target.innerHTML = X
        ID("kovetkezoJatekos").innerHTML = masodikJatekos + " következik"
    } else {
        event.target.innerHTML = O

        ID("kovetkezoJatekos").innerHTML = elsoJatekos + " következik"
    }
    if (szamlalo == $("section div").length-1) {
        ID("kovetkezoJatekos").innerHTML = "Valaki biztos nyert &#128523;"
    }
    szamlalo++
    event.target.className += " valasztott"
    event.target.removeEventListener("click", beleir)
    event.target.removeEventListener("mouseover", hover)
    event.target.removeEventListener("mouseout", hoverOff)
}
function nevMentes(form) {
    elsoJatekos = form.nev1.value;
    masodikJatekos = form.nev2.value;
    alert("Első játékos neve: " + elsoJatekos + "\nMásodik játékos neve: " + masodikJatekos)
    ID("kovetkezoJatekos").innerHTML = elsoJatekos + " következik"
}
function hover() {
    event.target.className += " kiemel"
}
function hoverOff() {
    event.target.className = "gomb"
}