"use strict";
const menu_hambuguer = document.getElementById("menu-hamburguer");
const nav = document.getElementById("nav");
const imagem_butao_hamburguer = document.getElementById("imagem-butao-hamburguer");
menu_hambuguer === null || menu_hambuguer === void 0 ? void 0 : menu_hambuguer.addEventListener("click", () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
    if (nav === null || nav === void 0 ? void 0 : nav.classList.contains("active")) {
        console.log("entrou no if");
        imagem_butao_hamburguer === null || imagem_butao_hamburguer === void 0 ? void 0 : imagem_butao_hamburguer.setAttribute("src", "../img/butao-x.png");
        // if(imagem_butao_hamburguer?.getAttribute("src")== "../img/butao-x.png"){
        // imagem_butao_hamburguer?.setAttribute("src","../img/butao-x.png")
        // }
        // else if(imagem_butao_hamburguer?.getAttribute("src")=="src","../img/menu.png"){
        // }           
    }
    else {
        console.log("entrou no else...");
        imagem_butao_hamburguer === null || imagem_butao_hamburguer === void 0 ? void 0 : imagem_butao_hamburguer.setAttribute("src", "../img/menu.png");
    }
});
nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("active");
});
