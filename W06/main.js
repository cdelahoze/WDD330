
fetch('note.txt')
.then(data=> data.text())
.then(data=>{
    document.querySelector('#note').innerHTML = `When we have a form, then any element is available in the named collection form.elements.${data}`
})
    
