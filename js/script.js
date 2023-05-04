function atualizar() {
    const arma = [
        Estado1 = { 
            Estado: "Ocupado"
        },
        Estado2 = {
            Estado: "Desocupado"
        },
        Estado3 = {
            Estado: "Manutenção"
        }
    ];
    const ocupado = document.querySelector("estado1");
    var mudaplvrnTela = "";
    ocupado = parseInt(Math.random()*arma.length);
    
    document.getElementById("Estado1").innerHTML = ocupado;


}