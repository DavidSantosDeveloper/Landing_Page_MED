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
// efeito hover secao contatos
let elemento_div_telefone = document.getElementById("card-contato-telefone");
let elemento_icone_telefone = document.getElementById("icone-telefone");
let elemento_titulo_telefone = document.getElementById("titulo-telefone");
let elemento_numero_telefone = document.getElementById("numero-telefone");
elemento_div_telefone === null || elemento_div_telefone === void 0 ? void 0 : elemento_div_telefone.addEventListener("mouseenter", () => {
    elemento_icone_telefone === null || elemento_icone_telefone === void 0 ? void 0 : elemento_icone_telefone.setAttribute('src', '../img/telefone_hover.png');
    elemento_titulo_telefone === null || elemento_titulo_telefone === void 0 ? void 0 : elemento_titulo_telefone.style.color = 'white';
    elemento_numero_telefone === null || elemento_numero_telefone === void 0 ? void 0 : elemento_numero_telefone.style.color = 'white';
    elemento_numero_telefone === null || elemento_numero_telefone === void 0 ? void 0 : elemento_numero_telefone.style.fontWeight = 'bold';
});
elemento_div_telefone === null || elemento_div_telefone === void 0 ? void 0 : elemento_div_telefone.addEventListener("mouseleave", () => {
    elemento_icone_telefone === null || elemento_icone_telefone === void 0 ? void 0 : elemento_icone_telefone.setAttribute('src', '../img/telefone.png');
    elemento_titulo_telefone === null || elemento_titulo_telefone === void 0 ? void 0 : elemento_titulo_telefone.style.color = 'black';
    elemento_numero_telefone === null || elemento_numero_telefone === void 0 ? void 0 : elemento_numero_telefone.style.color = 'black';
    elemento_numero_telefone === null || elemento_numero_telefone === void 0 ? void 0 : elemento_numero_telefone.style.fontWeight = 'normal';
});
let elemento_div_whatsapp = document.getElementById("card-contato-whatsapp");
let elemento_icone_whatsapp = document.getElementById("icone-whatsapp");
let elemento_titulo_whatsapp = document.getElementById("titulo-whatsapp");
let elemento_numero_whatsapp = document.getElementById("numero-whatsapp");
elemento_div_whatsapp === null || elemento_div_whatsapp === void 0 ? void 0 : elemento_div_whatsapp.addEventListener("mouseenter", () => {
    elemento_icone_whatsapp === null || elemento_icone_whatsapp === void 0 ? void 0 : elemento_icone_whatsapp.setAttribute('src', '../img/whatsapp_hover.png');
    elemento_titulo_whatsapp === null || elemento_titulo_whatsapp === void 0 ? void 0 : elemento_titulo_whatsapp.style.color = 'white';
    elemento_numero_whatsapp === null || elemento_numero_whatsapp === void 0 ? void 0 : elemento_numero_whatsapp.style.color = 'white';
    elemento_numero_whatsapp === null || elemento_numero_whatsapp === void 0 ? void 0 : elemento_numero_whatsapp.style.fontWeight = 'bold';
});
elemento_div_whatsapp === null || elemento_div_whatsapp === void 0 ? void 0 : elemento_div_whatsapp.addEventListener("mouseleave", () => {
    elemento_icone_whatsapp === null || elemento_icone_whatsapp === void 0 ? void 0 : elemento_icone_whatsapp.setAttribute('src', '../img/whatsapp.png');
    elemento_titulo_whatsapp === null || elemento_titulo_whatsapp === void 0 ? void 0 : elemento_titulo_whatsapp.style.color = 'black';
    elemento_numero_whatsapp === null || elemento_numero_whatsapp === void 0 ? void 0 : elemento_numero_whatsapp.style.color = 'black';
    elemento_numero_whatsapp === null || elemento_numero_whatsapp === void 0 ? void 0 : elemento_numero_whatsapp.style.fontWeight = 'normal';
});
let elemento_div_agendamento = document.getElementById("card-contato-agendamento");
let elemento_icone_agendamento = document.getElementById("icone-agendamento");
let elemento_titulo_agendamento = document.getElementById("titulo-agendamento");
let elemento_link_agendamento = document.getElementById("link-agendamento");
elemento_div_agendamento === null || elemento_div_agendamento === void 0 ? void 0 : elemento_div_agendamento.addEventListener("mouseenter", () => {
    elemento_icone_agendamento === null || elemento_icone_agendamento === void 0 ? void 0 : elemento_icone_agendamento.setAttribute('src', '../img/ethernet_3892809_hover.png');
    elemento_titulo_agendamento === null || elemento_titulo_agendamento === void 0 ? void 0 : elemento_titulo_agendamento.style.color = 'white';
    elemento_link_agendamento === null || elemento_link_agendamento === void 0 ? void 0 : elemento_link_agendamento.style.color = 'white';
    elemento_link_agendamento === null || elemento_link_agendamento === void 0 ? void 0 : elemento_link_agendamento.style.fontWeight = 'bold';
});
elemento_div_agendamento === null || elemento_div_agendamento === void 0 ? void 0 : elemento_div_agendamento.addEventListener("mouseleave", () => {
    elemento_icone_agendamento === null || elemento_icone_agendamento === void 0 ? void 0 : elemento_icone_agendamento.setAttribute('src', '../img/ethernet_3892809.png');
    elemento_titulo_agendamento === null || elemento_titulo_agendamento === void 0 ? void 0 : elemento_titulo_agendamento.style.color = 'black';
    elemento_link_agendamento === null || elemento_link_agendamento === void 0 ? void 0 : elemento_link_agendamento.style.color = 'black';
    elemento_link_agendamento === null || elemento_link_agendamento === void 0 ? void 0 : elemento_link_agendamento.style.fontWeight = 'normal';
});
