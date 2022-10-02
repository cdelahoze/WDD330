const lista = document.getElementById('lista')

const arrayElement = [ 
{label: 'Week 1 notes', url: 'W01/index.html'},
{label: 'Week 2', url: 'W02/index.html'},
{label: 'Week 2 team', url: 'W02/Teams/index2.html'},
{label: 'Week 3', url: 'W03/index.html'}
]

arrayElement.forEach(item => {
    lista.innerHTML += `<li><a href=${item.url}>${item.label}</a></li>`

});


