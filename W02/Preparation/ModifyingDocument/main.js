


//-----------------------------------------------------

//Insertion methods

// 1. Create <div> element
let div = document.createElement('div');
// 2. Set its class to "alert"
div.className = "alert";
// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.append(div);

//-----------------------------------------------------

ol.before('before'); // insert string "before" before <ol>
ol.after('after'); // insert string "after" after <ol>
let liFirst = document.createElement('li');
liFirst.innerHTML = 'prepend';
ol.prepend(liFirst); // insert liFirst at the beginning of <ol>
let liLast = document.createElement('li');
liLast.innerHTML = 'append';
ol.append(liLast); // insert liLast at the end of <ol>

//-----------------------------------------------------

//Creating the message

let textNode = document.createTextNode('Here I am');
document.body.append(textNode);

//-----------------------------------------------------

div.after('<p>Hello</p>', document.createElement('hr'));

//------------------------------------------------------

//insertAdjacentHTML/Text/Element

div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
div.insertAdjacentHTML('afterend', '<p>Bye</p>');

document.body.insertAdjacentHTML("afterend", `<div class="alerta">
<strong>Hi there!</strong> You've read an important message.
</div>`);

//------------------------------------------------------------

//Node removal

setTimeout(() => div.remove(), 5000);

//Cloning nodes: cloneNode

let div2 = div.cloneNode(true); // clone the message
div2.querySelector('strong').innerHTML = 'Bye there!'; // change the clone

div.after(div2); // show the clone after the existing div

//DocumentFragment

function getListContent() {
    let fragment = new DocumentFragment();
  
    for(let i=1; i<=3; i++) {
      let li = document.createElement('li');
      li.append(i);
      fragment.append(li);
    }
  
    return fragment;
  }
  
  ul.append(getListContent()); // (*)

/*DocumentFragment rara vez se usa explícitamente. ¿Por qué agregar a un tipo especial de nodo, 
si podemos devolver una matriz de nodos en su lugar? Ejemplo reescrito:*/

  function getListContent2() {
    let result = [];
  
    for(let i=4; i<=6; i++) {
      let li = document.createElement('li');
      li.append(i);
      result.push(li);
    }
  
    return result;
  }
  
  ul2.append(...getListContent2()); // append + "..." operator = friends!
