guardar_localStorage()

function guardar_localStorage (){
    let persona = {
        nombre: 'Cristian',
        edad: '59',
        correo: 'cdelahoze@hotmail.com'
    };
    let nombre = 'Juan Esteba'

    //localStorage sólo almacena string, numeros, boleanos

localStorage.setItem("name", nombre)

//para acceder a un obsjeto se requiere 

localStorage.setItem("person", JSON.stringify(persona));
}

obtener_localStorage();

function obtener_localStorage(){

    let nombre = localStorage.getItem('name');
    let persona = JSON.parse(localStorage.getItem('person'));
    console.log(nombre);
    console.log(persona);
}