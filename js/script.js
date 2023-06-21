function estado() {
    var TxtEstado1 = document.querySelector('.estado');
    if (TxtEstado1.innerHTML === "Vazio") {
        TxtEstado1.innerHTML = "Ocupado";
        TxtEstado1.style.backgroundColor = rgb(196, 0, 0);
    }
    if (TxtEstado1.innerHTML === "Ocupado") {
        
    }
    else if (TxtEstado1.innerHTML === "Manutenção") {
        TxtEstado1.innerHTML = "Desocupado";
        TxtEstado1.style.backgroundColor = 'rgb(60, 161, 2)';
    }
    else {
        TxtEstado1.innerHTML = "Ocupado";
        TxtEstado1.style.backgroundColor = 'rgb(145, 143, 143)';
    }
}

