const lista = document.getElementById('lista')

fetch('items.json')
.then(res => res.json())
.then(datos => {
    
    const arrayElement = datos
    arrayElement.forEach(item => {
        lista.innerHTML += `<li><a href=${item.url}>${item.label}</a></li>`
    });
})







