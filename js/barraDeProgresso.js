function moveBarraDeRolagem(pergunta) { 
    var elem = document.getElementById("myBar");
    var porcentagemDaBarra = (pergunta * 0.5)*10;
    elem.style.width = porcentagemDaBarra + "%";
    elem.innerHTML = pergunta+ "/20";
}