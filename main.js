const lista = document.getElementById('lista')

const arrayElement = [ 
{label: 'Week 1 notes', url: 'W01/index.html'},
{label: 'Week 2', url: 'https://byui-cit.github.io/cit261/resources/portfolio.html'},
{label: 'Week 3', url: 'https://byui-cit.github.io/cit261/resources/portfolio.html'}
]

arrayElement.forEach(item => {
    lista.innerHTML += `<li><a href=${item.url}>${item.label}</a></li>`

});


