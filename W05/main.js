let contenido = document.querySelector('#note')


fetch('note.txt')
.then(data=> data.text())
.then(data=>{
    note.innerHTML = `${data}`
})
    
