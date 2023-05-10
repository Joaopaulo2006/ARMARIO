function Ocupado() {
    var txt = document.getElementById("texto");
    let ocupado = document.getElementById("pop-up");
    txt.innerHTML = " Armario Ocupado";
    ocupado.style.display = 'block';

}
function Manutencao() {
    alert("No momento o armário está em manutenção")
    var txt = document.getElementById("texto");
    let manutencao = document.getElementById("pop-up");
    txt.innerHTML = " Armario em Manutenção";
    manutencao.style.display = 'block';
    txt.className = 'manutencao';
    
}
function Desocupado() {
    let desocupado = document.getElementById("pop-up");
   
}
function fechar() {
    document.getElementById("pop-up").style.display = 'none'
}