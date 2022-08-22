let header = document.getElementById("header")

let nube1 = document.getElementById("nube1");
let fondo_transparente = document.getElementById("fondo_transparente");
let nube2 = document.getElementById("nube2");
let slogan = document.getElementById("slogan")
let btn = document.getElementById("btn");
let viento = document.getElementById("viento");
let persona = document.getElementById("persona");

window.addEventListener("scroll", function(){
    let value = window.scrollY;

    fondo_transparente.style.marginLeft = value * 0.7 + 'px';
    nube1.style.left = value* -5  + 'px';
    nube2.style.left = value* -5  + 'px';
    btn.style.marginTop = value * 0.7 + 'px';
    slogan.style.marginBottom =   value * -1  + 'px';
    viento.style.left = value* -5  + 'px';
    header.style.marginTop = value * 0.4 + 'px';
    persona.style.marginLeft = value * 1  + 'px';
})

const navigation = document.querySelector("nav")
document.querySelector(".menu").onclick = function(){
    this.classList.toggle("active");
    navigation.classList.toggle(`active`);
}

// const item = document.querySelector("a");
// addEventListener("click", function(){
//     item.classList.toggle("active");
// })