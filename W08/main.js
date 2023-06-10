
fetch('note.txt')
.then(data=> data.text())
.then(data=>{
    document.querySelector('#note').innerHTML = `${data}`

})
    
