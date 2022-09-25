const note = document.getElementById('note')

note.innerHTML += `<p>Although I already knew and have used part of what I have seen this week
 in the three chapters of JavaScript: Novice to Ninja 2nd Edition, several concepts are new such
  as: Octal and Hexadecimal Numbers. So far I haven't needed to do anything with these kinds of 
  numbers, but it's interesting to keep in mind.<br>

<br>const lista = document.getElementById('lista')<br>

const arrayElement = [ <br>
{label: 'Week 1 notes', url: 'W01/index.html'},<br>
{label: 'Week 2', url: 'https://byui-cit.github.io/cit261/resources/portfolio.html'},<br>
{label: 'Week 2 team', url: 'W02/Teams/index2.html'},<br>
{label: 'Week 3', url: 'https://byui-cit.github.io/cit261/resources/portfolio.html'}<br>
]<br>

arrayElement.forEach(item => {<br>
    lista.innerHTML += <li><a href={item.url}>{item.label}</a></li><br>
});:<br>

<br>In terms of functions, it is also not such a new topic. Of course there are some 
concepts that although he had used them, he did not know especially how to invoke 
function expressions.<br>

<br>
function one() {<br>
    const input1 = document.querySelector("#input1").value;<br>
    progress = (0.5+((input1 )/2))*input1;<br>
    console.log(progress)<br>
    document.querySelector("#div1").innerHTML = progress;<br>
}<br>
</p>`
    