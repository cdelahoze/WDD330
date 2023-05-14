const lista = document.getElementById('lista')

const arrayElement = [ 
{label: 'Week 1 notes', url: 'W01/index.html'},
{label: 'Week 2', url: 'W02/index.html'},
{label: 'Week 2 Weekly Report', url: 'W02/Teams/index.html'},
{label: 'Week 3 notes', url: 'W03/index.html'},
{label: 'Week 4 form', url: 'W04/index.html'},
//{label: 'Week 4 hero', url: 'W04/hero.html'},
//{label: 'Week 4 Teams', url: 'W04/Teams/teamActivity.html'}
]

arrayElement.forEach(item => {
    lista.innerHTML += `<li><a href=${item.url}>${item.label}</a></li>`
});


