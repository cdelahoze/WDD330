window.onload = iniciar;

function iniciar(){
    let btnAgregar = document.getElementById('btnAgregar')
    btnAgregar.addEventListener('click', clickBtnAgregar)
    mostrarNotas();
}

function clickBtnAgregar(){
    let txtNota = document.getElementById("txtNota")
    localStorage.nota = txtNota.value;
    mostrarNotas();
}

function mostrarNotas(){
    let divNotas = document.getElementById("divNotas")
    divNotas.innerHTML = localStorage.nota;
}