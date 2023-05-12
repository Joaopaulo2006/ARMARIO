function Desocupado() {
    var estadoDes = document.querySelector("estado2");
    
    if(estadoDes.innerHTML === "Desocupado") {
        destOcu.style.backgroudColor = "rgb(145, 143, 143)";    
        estadoDes.innerHTML === "Ocupado";
        estadoDes.className = "destOcu";
    }
   
}
function Ocupado() {
    if(estadoOcu === "Ocupado") {
        alert("No momento o armário esta ocupado");
    }
    var estadoOcu = document.querySelector("estado1");
    if(estadoOcu === "Ocupado") {
        estadoOcu.textContent = "Manutenção";
        estadoOcu.style.backgroudColor = "rgb(196, 0, 0)";
    }


}
function Manutencao() {
    if(estadoMan === "Manutenção") {
    alert("No momento o armário está em manutenção");
    }
   
    var estadoMan = document.getElementById("estado3");
    
}
