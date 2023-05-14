export function fechaActual(){
    let hoy = new Date();
    let dd = hoy.getDate();
        let mm = hoy.getMonth() + 1; //hoy es 0!
        let yyyy = hoy.getFullYear();
        if(dd<10){
            dd = '0' + dd
        }
        if(mm<10){
            mm= '0' + mm
        }

        hoy = dd + '/' + mm + '/' + yyyy;

        return hoy;
}


